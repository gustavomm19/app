const upload = ({
  width, height, color, style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="upload-icon"
    x="0px"
    y="0px"
    width={width || '22px'}
    height={height || '22px'}
    viewBox="0 0 471.2 471.2"
    style={style}
    xmlSpace="preserve"
    fill={color || '#000000'}
  >
    <path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8    c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8    C471.2,236.25,465.2,230.15,457.7,230.15z" />
    <path d="M159.3,126.15l62.8-62.8v273.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V63.35l62.8,62.8c2.6,2.6,6.1,4,9.5,4    c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4c-3.6,0-7,1.4-9.5,4l-85.8,85.8    c-5.3,5.3-5.3,13.8,0,19.1C145.5,131.35,154.1,131.35,159.3,126.15z" />
  </svg>
);

export default upload;
