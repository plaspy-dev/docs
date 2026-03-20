---
slug: /eelink/gpt12/configuration
id: gpt12-configuration
sidebar_label: Configuration
title: EElink - GPT12 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT12 tracker setup and Plaspy compatibility using shared server settings and SMS commands
keywords:
  - EElink GPT12 configuration
  - EElink GPT12 setup
  - EElink GPT12 server configuration
  - EElink GPT12 tracking software configuration
  - EElink GPT12 GPS platform setup
  - EELINK protocol integration
  - GPT12 SMS commands
  - GPT12 APN setup
  - GPS tracker Plaspy setup
  - fleet tracking GPT12
---

# EElink - GPT12 Configuration

This page documents the public configuration context for using the EElink GPT12 GPS tracker with Plaspy. It focuses on the practical server and device settings that let the GPT12 report location and telemetry to the Plaspy platform, and it includes the publicly available SMS commands commonly used to apply those settings on the device.

Plaspy uses shared server settings across supported devices and automatically detects the device protocol, but manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPT12 supports SMS configuration and EELINK protocol integration, and the example commands below show a typical SMS-based workflow that is publicly documented for this model.

## Configuration Overview

This configuration prepares the GPT12 to communicate reliably with Plaspy by setting the mobile data APN and directing the device to Plaspy's server endpoint. The goal is to enable the tracker to send periodic location updates and event reports so the device is visible in the Plaspy platform.

- Configure the device APN so GPRS data can be used for live reporting.
- Point the tracker to the Plaspy server address so reports arrive at the platform.
- Set an update interval appropriate for your monitoring needs.
- Optionally reset or verify parameters to ensure a clean configuration state.
- Validate connectivity and visibility inside Plaspy after applying settings.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GPT12. These values are shared across Plaspy supported devices and are required to route tracker messages to the platform.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged GPT12 device or one connected to power for configuration.
- A valid SIM card with data enabled and SMS service available for SMS configuration.
- The mobile operator APN, and optionally APN username and password from your SIM provider.
- Access to the manufacturer configuration method such as SMS commands, PC tool, or vendor app.
- Knowledge of the device IMEI or identifier used to register the tracker in Plaspy if required by your account workflow.
- Confirmation that the device firmware supports SMS-based configuration and the EELINK protocol as expected.

## How This Tracker Connects to Plaspy

When configured, the GPT12 reports location and status messages to the Plaspy server endpoint so the device becomes visible in the Plaspy platform. Plaspy receives the incoming connections on its shared server and port and determines the tracker protocol automatically.

- The tracker sends GPRS data reports to the Plaspy server domain or IP on port 8888.
- The device can be configured to use either UDP or TCP transport to reach the Plaspy endpoint.
- Plaspy receives the reports and maps them to the correct device protocol automatically.
- Reports include periodic position updates according to the configured TIMER interval.
- Once messages are received, the device and events become visible for monitoring and playback in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the GPT12 SMS command interface, PC configuration tool, or vendor app.
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the IP address 54.85.159.138.
3. Set the server port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose the transport type UDP or TCP if the device requires a transport selection.
5. Configure the APN and any APN credentials required by your SIM operator.
6. Apply or save the configuration on the device and restart the tracker if required.
7. Validate that the GPT12 is reporting to Plaspy by checking the device status and incoming messages in the platform.

## Example Configuration Commands

The GPT12 supports SMS command configuration. The following public commands are presented in the documented order. Keep placeholders exactly as shown and replace them with your carrier values.

1. Optional initial reset to factory settings (use only when needed for a clean start)
```
FACTORY#
```

2. Set the time zone to UTC 0 (example)
```
GMT,E,0#
```

3. Set the operator APN. Replace the placeholders with your operator information:
- {{apn}} is the APN name provided by your SIM operator
- {{apnu}} is the APN username if required by your operator
- {{apnp}} is the APN password if required by your operator
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: If your operator requires no username or password, you may send only APN,{{apn}}# depending on the device firmware.

4. Set the GPRS server to the Plaspy domain using the SERVER command
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server to the Plaspy IP address instead
```
SERVER,0,54.85.159.138,8888#
```

6. Set the update interval to every 60 seconds
```
TIMER,60#
```

7. Check current parameter settings
```
PARAM#
```

These commands follow the publicly documented SMS flow for the GPT12. Use the variant of the SERVER command (domain or IP) that best suits your network environment.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax or available options. Verify syntax against your device firmware documentation before sending commands.
- Some deployments prefer SERVER with the domain form d.plaspy.com to allow DNS updates, while others prefer the IP form. Both are accepted by Plaspy on port 8888.
- Choose UDP or TCP based on your network and operator behavior. Plaspy accepts either transport and will detect the protocol automatically.
- SMS-based configuration is useful when the device is offline or before installing a SIM for data. Confirm SMS command delivery and acknowledgment from the device.
- Keep a record of the commands you send and test connectivity after configuration using the PARAM# command or by observing the device in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT12 to report to Plaspy gives organizations consistent visibility into asset locations and event history through a single shared server endpoint. Using the shared Plaspy server settings and port simplifies large scale deployment because the platform automatically detects tracker protocols and accepts devices reporting to the same endpoint.

To learn more about Plaspy and supported tracker workflows visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and command updates for the GPT12 please verify details on the manufacturer site https://www.eelink.com.cn/ since firmware behavior and setup methods can change over time.
