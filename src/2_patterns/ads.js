import breadcrumb from './breadcrumb/template.html?raw';
import tabsNavigation from './tabs-navigation/template.html?raw';
import expandMenuCard from './expand-menu-card/template.html?raw';
import keypointCard from './keypoint-card/template.html?raw';
import articleCard from './article-card/template.html?raw';
import awardItem from './award-item/template.html?raw';
import feeCard from './fee-card/template.html?raw';
import managementGuidedCard from './management-guided-card/template.html?raw';
import managementOthersCard from './management-others-card/template.html?raw';
import itemCard from './item-card/template.html?raw';
import toggleText from './toggle-text/template.html?raw';

const patterns = [
  {
    name: 'breadcrumb',
    template: breadcrumb,
  },
  {
    name: 'tabsNavigation',
    template: tabsNavigation,
  },
  {
    name: 'expandMenuCard',
    template: expandMenuCard,
  },
  {
    name: 'keypointCard',
    template: keypointCard,
  },
  {
    name: 'articleCard',
    template: articleCard,
  },
  {
    name: 'itemCard',
    template: itemCard,
  },
  {
    name: 'awardItem',
    template: awardItem,
  },
  {
    name: 'feeCard',
    template: feeCard,
  },
  {
    name: 'managementGuidedCard',
    template: managementGuidedCard,
  },
  {
    name: 'managementOthersCard',
    template: managementOthersCard,
  },
  {
    name: 'toggleText',
    template: toggleText,
  },
];

export default patterns;