import { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Icon, User } from '@/api';
import styles from './chooseIcon.module.scss';
import { initialValues, validationSchema } from './ChooseIcon.form';
import { useAuth } from '@/hooks/useAuth';

const iconCtrl = new Icon();
const userCtrl = new User();

export function ChooseIcon(props) {
  const { reload, onReload } = props;
  const { user, updateUser } = useAuth();

  const [icons, setIcons] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(user.icon || '');
  const [iconUrl, setIconUrl] = useState('/images/star.svg');

  // Fetch list of icons
  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const result = await iconCtrl.getAllIcons();
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
  }, [user.icon, reload]);

  // Formik setup
  const formik = useFormik({
    initialValues: initialValues(user.icon, ''),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, values);
        updateUser({ icon: values.icon });
      } catch (error) {
        console.error('Error updating user icon:', error);
      }
    },
  });

  const handleChange = (event) => {
    const iconId = event.target.value;
    setSelectedIcon(iconId);
    formik.setFieldValue('icon', iconId);

    const selectedIconData = icons.find((icon) => icon.id === iconId);
    setIconUrl(
      selectedIconData?.attributes?.icon?.data?.attributes?.url ||
        '/images/star.svg'
    );
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className={styles.selectContainer}>
        <select
          className={styles.select}
          name='icon'
          aria-invalid={formik.errors.icon ? 'true' : 'false'}
          value={selectedIcon}
          onChange={handleChange}
        >
          <option className={styles.placeholder} value=''>
            Select an icon
          </option>
          {icons.map((icon) => (
            <option className={styles.option} key={icon.id} value={icon.id}>
              {icon.attributes.icon_name}
            </option>
          ))}
        </select>
        <div className={styles.buttonContainer}>
          <button
            type='submit'
            disabled={formik.isSubmitting}
            className={styles.saveButton}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
