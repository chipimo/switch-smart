import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import { AppBar } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import ButtonBase from "@material-ui/core/ButtonBase";
// import ImageIph from "../../assets/images/iphone_6_pluse.jpeg"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const ImageIph = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

console.log(ImageIph["Apple-iPhone-11-Pro.jpg"].default);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function InnerTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

InnerTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

function innerProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "90vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 500
  },
  tab: {
    height: 70,
    backgroundColor: "transparent",
    marginBottom: 10,
    border: "none",
    fontSize: 25,
    cursor: "pointer",
    outline: "none"
  },
  image: {
    position: "relative",
    height: 200,
    margin: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.8,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

const tabsList = [
  {
    tabname: "Phnoes",
    background: "red",
    color: "#fff",
    index: 0,
    category: [
      {
        cartname: "Iphone",
        categoryKey: 0,
        subcart: [
          { phnoename: "iphone 7s pluse", productKey: 0 },
          { phnoename: "iphone 5s pluse", productKey: 1 },
          { phnoename: "iphone 7s ", productKey: 2 }
        ]
      },
      {
        cartname: "sumsaung",
        categoryKey: 1,
        subcart: [{ phnoename: "iphone 8s pluse", productKey: 1 }]
      },
      {
        cartname: "Itel",
        categoryKey: 2,
        subcart: [{ phnoename: "iphone 9s pluse", productKey: 2 }]
      },
      {
        cartname: "Huwawi",
        categoryKey: 3,
        subcart: [{ phnoename: "iphone 10s pluse", productKey: 3 }]
      }
    ]
  },
  {
    tabname: "Tablets",
    background: "#006B94",
    color: "#fff",
    index: 1,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  },
  {
    tabname: "Covers",
    background: "green",
    color: "#fff",
    index: 2,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  },
  {
    tabname: "Games",
    background: "orange",
    color: "#fff",
    index: 3,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  },
  {
    tabname: "Screen Protectors",
    background: "#9A43A8",
    color: "#fff",
    index: 4,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  },
  {
    tabname: "Watches",
    background: "green",
    color: "#fff",
    index: 5,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  },
  {
    tabname: "Laptops",
    background: "#3b3b3b",
    color: "#fff",
    index: 6,
    category: [
      {
        categoryKey: 0,
        cartname: "sumsaung",
        subcart: [{ phnoename: "iphone 12s pluse", productKey: 0 }]
      }
    ]
  }
];

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [innerValue, setInnerValue] = React.useState(0);
  const [innerPhone, setInnerPhone] = React.useState(0);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInnerChange = (event, newValue) => {
    setInnerValue(newValue);
  };

  const handleChangeIndex = index => {
    setInnerValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabsList.map(itmes => (
          <button
            key={itmes.index}
            className={classes.tab}
            onClick={() => {
              handleChange("", itmes.index);
            }}
            style={{
              width: 160,
              backgroundColor: itmes.background,
              color: itmes.color
            }}
          >
            <Typography style={{ width: 160 }} variant="h6">
              {itmes.tabname}
            </Typography>
          </button>
        ))}
      </Tabs>
      <div style={{ width: 570, minWidth: 570 }}>
        {tabsList.map(data => (
          <TabPanel value={value} key={data.index} index={data.index}>
            <AppBar position="static" color="default">
              <Tabs
                value={innerValue}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleInnerChange}
                aria-label="full width tabs example"
              >
                {data.category.map(items => (
                  <Tab
                    key={items.categoryKey}
                    label={items.cartname}
                    {...innerProps(items.categoryKey)}
                  />
                ))}
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={innerValue}
              onChangeIndex={handleChangeIndex}
            >
              {data.category.map(innerItem => (
                <div>
                  {innerItem.subcart.map(products => (
                    <ButtonBase
                      focusRipple
                      key={products.productKey}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        width: "40%"
                      }}
                    >
                      <span
                        className={classes.imageSrc}
                        style={{
                          backgroundImage: `url(${ImageIph["Apple-iPhone-11-Pro.jpg"].default})`
                        }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                        <Typography
                          component="span"
                          variant="h6"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                          {products.phnoename}
                          <span className={classes.imageMarked} />
                          <div>K 3,000.00</div>
                        </Typography>
                      </span>
                    </ButtonBase>
                  ))}
                </div>
              ))}
            </SwipeableViews>
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
