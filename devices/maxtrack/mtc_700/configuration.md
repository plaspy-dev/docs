---
slug: /maxtrack/mtc_700/configuration
id: mtc_700-configuration
sidebar_label: Configuration
title: Maxtrack - MTC-700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the Maxtrack MTC-700 with Plaspy server settings and SMS command examples
keywords:
  - Maxtrack MTC-700 configuration
  - Maxtrack MTC-700 setup
  - MTC-700 server configuration
  - MTC-700 Plaspy setup
  - GPS tracker configuration guide
  - vehicle tracking platform setup
  - Plaspy tracker integration
  - MTC-700 SMS configuration
  - MTC-700 APN setup
  - Maxtrack tracker instructions
---

# Maxtrack - MTC-700 Configuration

This page provides public configuration context for using the Maxtrack MTC-700 tracker family with Plaspy. It collects the practical server settings and the known SMS setup command format provided in manufacturer public examples to help prepare the device to report location and telemetry to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example below includes the public SMS command format published for the MTC-700 and explains how to apply the Plaspy server values in a safe and practical way.

## Configuration Overview

The goal of the configuration process is to point the MTC-700 to the Plaspy server endpoint, ensure the device can use a valid data or SMS path, and verify that the tracker appears in the Plaspy platform. The public configuration flow for this model commonly uses SMS commands as one available method.

- Configure the device to report to the Plaspy server endpoint and port.
- Set APN and SIM related parameters so the tracker can connect over GPRS where available.
- Validate connectivity and that the unit becomes visible in Plaspy.
- Use SMS command examples provided by the manufacturer for quick remote setup.
- Confirm transport type TCP or UDP as required by the device and network.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices
Note that Plaspy uses the same port for all supported devices and will accept UDP or TCP on port 8888.

## Typical Requirements Before Setup

- Ensure the MTC-700 has stable power and is powered on for configuration.
- Have the device IMEI or tracker ID available to place into SMS command placeholders.
- Confirm the SIM card is active and has data or SMS credit if SMS configuration is used.
- Access to the official Maxtrack configuration method such as SMS commands or vendor software.
- Know your network APN settings to replace placeholders where required.
- If using software tools, have a connection to the tracker via the recommended manufacturer interface.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the MTC-700 is directed to send its data packets to the shared Plaspy server endpoint and port so Plaspy can ingest and display the device data. Plaspy will detect the protocol and process messages from the tracker without requiring per device port configuration.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data transport can be established over UDP or TCP depending on device selection and network.
- Plaspy automatically detects the tracker protocol on incoming connections.
- When GPRS is unavailable, the MTC-700 can send position information via SMS as a fallback where supported.
- Once reporting, position and event messages become visible and actionable inside Plaspy.

## Common Configuration Workflow

1. Access the official Maxtrack configuration method or software as documented by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server address field.
3. Set the server port to 8888.
4. Choose UDP or TCP if the device prompts for a transport selection.
5. If using SMS setup, prepare the SMS command with the device ID and APN placeholders replaced.
6. Apply or save the configuration on the device or send the SMS command to the tracker.
7. Restart the device if required by the manufacturer to activate the new settings.
8. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The manufacturer provides an SMS command format for initial setup. The public example uses the default device password 0000 and placeholders for the tracker ID and APN values. Replace placeholders with your actual values before sending.

- Notes on placeholders
  - [trackerID] Replace with the device IMEI or tracker identifier as required by the device.
  - [apn] Replace with your mobile operator APN name.
  - [apnu] Replace with your APN username if required otherwise use an empty value.
  - [apnp] Replace with your APN password if required otherwise use an empty value.

SMS example command (send to the tracker from an authorized phone number):

```
0000,[trackerID],2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

- This single SMS sets the device password prefix, tracker ID field, APN parameters, and the Plaspy server IP and port as shown above.
- If you prefer to use the server domain instead of the IP and your device supports domain names in SMS setup, use d.plaspy.com in place of 54.85.159.138 where the manufacturer allows it.
- The command shown preserves the order published by Maxtrack; maintain the order when populating placeholders.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or available parameters; always verify the SMS command format against the current Maxtrack documentation.
- The MTC-700 supports SMS based setup in the public example, which is useful when remote software access is not available.
- Choosing TCP or UDP may affect firewall and operator behavior; test both options if connectivity issues occur.
- The MTC-700 family supports dual SIM and SMS fallback, which can be useful for redundancy in connectivity.
- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection, simplifying server side configuration.

## Why Use Plaspy with This Configuration

Configuring the Maxtrack MTC-700 to report to Plaspy gives operations a consistent server endpoint for fleet visibility and event monitoring. With shared Plaspy server settings and automatic protocol detection, integrating the MTC-700 lets teams centralize location data and telemetry from devices configured to the same endpoint and port.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify the official Maxtrack documentation at https://maxtrack.com.br.
