import React, { useState } from "react";
// import { Switch } from "react-native-gesture-handler";
import styled from "styled-components";
import { colors } from "../colors/colors";
import { Switch } from "react-native";

export const SwitchBackground = ({funcao}) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    return (
        <ViewToggle>
            <Switch
                trackColor={{ false: "#FFFFFF", true: "#FFFFFF" }}
                thumbColor={isEnabled ? "#EC0344" : "#8D8B92"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={funcao}
                value={isEnabled}
            />
        </ViewToggle>
    );
}

const ViewToggle = styled.View`
    width:39px;
    height:27px;
    border-radius: 40px;    
    justify-content: center;
    align-items:center;
    border-color: ${colors.SecondaryColor};
    border-width:1px;
`;

export default SwitchBackground;