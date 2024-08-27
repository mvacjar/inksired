import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Icon, User } from '@/api';
import styles from './chooseIcon.module.scss';
import { initialValues, validationSchema } from './ChooseIcon.form';
import { useAuth } from '@/hooks/useAuth';

const iconCtrl = new Icon();
const userCtrl = new User();

export function ChooseIcon(props) {
  const { image, reload, onReload } = props;
  const { user, updateUser } = useAuth();
  const [icons, setIcons] = useState([]);
  const [iconChosen, setIconChosen] = useState([]);

  const [selectedIcon, setSelectedIcon] = useState(user.icon || '');
  const [iconUrl, setIconUrl] = useState('/images/star.svg');

  const hasIcon = user.icon || '';

  // Fetch list of icons
  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const result = await iconCtrl.getAllIcons();
        console.log('Icons fetched:', result.data);
        setIcons(result.data);

        const initialIcon = result.data.find((icon) => icon.id === user.icon);
        if (initialIcon) {
          setIconUrl(initialIcon.attributes.icon.data.attributes.url);
        }
      } catch (error) {
        console.error('Error fetching icons:', error);
      }
    };

    fetchIcons();
  }, [user.icon]);

  // Fetch chosen icon
  useEffect(() => {
    const fetchChosenIcon = async () => {
      try {
        const response = await iconCtrl.getAllIcons(user.id);
        console.log('Icon chosen response:', response.data);

        const chosenIcon = response.data.find((icon) => icon.id === user.icon);
        setIconChosen(chosenIcon || null);
      } catch (error) {
        console.error('Error fetching chosen icon:', error);
      }
    };

    if (user && user.id) {
      fetchChosenIcon();
    }
  }, [user, reload]);

  // Formik setup
  const formik = useFormik({
    initialValues: initialValues(user.icon, ''),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, { icon: values.icon });
        updateUser({ icon: values.icon });
      } catch (error) {
        console.error('Error updating user icon:', error);
      }
    },
  });

  // Handle icon selection
  const handleChange = (event) => {
    const iconId = event.target.value;
    setSelectedIcon(iconId);

    const selectedIconData = icons.find((icon) => icon.id === iconId);
    if (selectedIconData?.attributes?.icon?.data?.attributes?.url) {
      setIconUrl(selectedIconData.attributes.icon.data.attributes.url);
    } else {
      setIconUrl('/images/star.svg'); // Valor por defecto
    }

    formik.setFieldValue('icon', iconId);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {hasIcon && iconChosen ? (
          <Image
            key={iconChosen.id}
            src={iconChosen.attributes.icon.data.attributes.url}
            alt={iconChosen.attributes.icon_name}
            width={100}
            height={100}
            onReload={onReload}
          />
        ) : (
          iconUrl && (
            <div>
              <Image
                src={iconUrl}
                alt={selectedIcon || 'Selected Icon'}
                width={100}
                height={100}
              />
            </div>
          )
        )}
        <div
          className={styles.buttonContainer}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <select
            value={selectedIcon}
            onChange={handleChange}
            name='icon'
            aria-invalid={formik.errors.icon ? 'true' : 'false'}
          >
            <option value=''>Select an icon</option>
            {icons.map((icon) => (
              <option key={icon.id} value={icon.id}>
                {icon.attributes.icon_name}
              </option>
            ))}
          </select>
          <button
            type='submit'
            disabled={formik.isSubmitting}
            className={styles.saveButton}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
