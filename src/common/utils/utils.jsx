export const getValuesJoinedInPTag = (items = [], key = 'name', noDataMsg = 'No items available') => (
  (<p>{items?.map((item) => item[key])?.join(', ') || noDataMsg}</p>)

);

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

export const generatePreviewSections = (sections, rowData, t) => {
  return sections?.map(({ title, fields }) => ({
    title: t(title),
    content: (
      <div className="grid grid-cols-2 gap-6">
        {fields?.map(({
          label, key, isArray = false, isRadio = false
        }) => {
          const rawValue = getNestedValue(rowData, key);
          let value;

          if (isRadio) {
            value = rawValue === true ? t('yes') : t('no');
          } else {
            value = isArray ? rawValue?.name || rawValue : rawValue;
          }
          return (
            <div key={key}>
              <span className="font-bold">{t(label)}: </span>{value ?? ''}
            </div>
          );
        })}
      </div>
    )
  }));
};
