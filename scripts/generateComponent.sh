#!/bin/bash
# generateComponent.sh
# Author: Alexander Burdiss
# Since: 9/7/21
# Description: Generates a React component and all the necessary files that go
# along with it.
version="1.0.2"

component=$1
date=`date +"%D"`

# echo
# echo "        ▄▄▄▄▄ ▄ .▄▄▄▄ .    ▄▄▄▄· ▄▄▄ .·▄▄▄▄  ▄▄▄▄▄▪  • ▌ ▄ ·. ▄▄▄ . "
# echo "        •██  ██▪▐█▀▄.▀·    ▐█ ▀█▪▀▄.▀·██▪ ██ •██  ██ ·██ ▐███▪▀▄.▀· "
# echo "         ▐█.▪██▀▐█▐▀▀▪▄    ▐█▀▀█▄▐▀▀▪▄▐█· ▐█▌ ▐█.▪▐█·▐█ ▌▐▌▐█·▐▀▀▪▄ "
# echo "         ▐█▌·██▌▐▀▐█▄▄▌    ██▄▪▐█▐█▄▄▌██. ██  ▐█▌·▐█▌██ ██▌▐█▌▐█▄▄▌ "
# echo "         ▀▀▀ ▀▀▀ · ▀▀▀     ·▀▀▀▀  ▀▀▀ ▀▀▀▀▀•  ▀▀▀ ▀▀▀▀▀  █▪▀▀▀ ▀▀▀  "
# echo "                     ▄▄▄·▄▄▄         ▐▄▄▄▄▄▄ . ▄▄· ▄▄▄▄▄            "
# echo "                    ▐█ ▄█▀▄ █·▪       ·██▀▄.▀·▐█ ▌▪•██              "
# echo "                     ██▀·▐▀▀▄  ▄█▀▄ ▪▄ ██▐▀▀▪▄██ ▄▄ ▐█.▪            "
# echo "                    ▐█▪·•▐█•█▌▐█▌.▐▌▐▌▐█▌▐█▄▄▌▐███▌ ▐█▌·            "
# echo "                    .▀   .▀  ▀ ▀█▄▀▪ ▀▀▀• ▀▀▀ ·▀▀▀  ▀▀▀             "
# echo "                        generateComponent.sh v$version              "
# echo

if [[ ! $component ]]; then
  echo
  echo "Enter a Component and a Directory!"
  echo
  exit 1;
fi

if [[ ! -d "src/Components" ]]; then
  echo
  echo "Directory src/Components Doesn't exist!"
  echo
  exit 1
elif [[ -d "src/Components/$component" ]]; then
  echo
  echo "Component src/Components/$component Already exists!"
  echo
  exit 1
fi

mkdir "src/Components/$component"

# Make JS File
echo "// @ts-check
import React from \"react\";
import \"./$component.scss\";

/**
 * @namespace $component
 * @function $component
 * @author Trevor Cash
 * @since $date
 * @version 1.0.0
 * @component
 */
export default function $component() {
  return (
    <div className=\"$component\">
      <div>$component Works!</div>
    </div>
  );
}" > "src/Components/$component/$component.js"

# Make SCSS File
touch "src/Components/$component/$component.scss"

# Make Storybook File
echo "import React from \"react\";
import $component from \"./$component\";

export default {
  title: \"Components/$component\",
  component: $component,
  argTypes: {},
};

const Template = (args) => <$component {...args} />;

export const Default = Template.bind({});
Default.args = {};" > "src/Components/$component/$component.stories.js"

# Make Jest test file
# echo "import { render } from \"@testing-library/react\";
# import $component from \"./$component\";

# describe(\"renders $component\", () => {
#   test(\"renders base component\", () => {
#     render(<$component />);
#   });
# });" > "src/Components/$component/$component.test.js"

echo
echo "Component src/Components/$component Created Successfully!"
echo
exit 0
