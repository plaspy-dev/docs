---
slug: /topfly/warriorx_100/configuration
id: warriorx_100-configuration
sidebar_label: Configuration
title: TopFly - WarriorX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the TopFly WarriorX 100 and how to point the device to Plaspy servers for telemetry ingestion
keywords:
  - TopFly WarriorX 100 configuration
  - WarriorX 100 setup
  - Plaspy integration
  - GPS tracker configuration
  - server settings Plaspy
  - asset tracker configuration
  - vehicle tracking TopFly
  - tracker SMS commands
  - GNSS asset tracker
  - low power tracker setup
---

# TopFly - WarriorX 100 Configuration

This page documents the public configuration context for using the TopFly WarriorX 100 with Plaspy. It explains the practical steps and required server settings to point the device at Plaspy so location and telemetry are delivered to the platform. Use this guide alongside the manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware revision, hardware revision, installation type, and the vendor tools you use. The WarriorX 100 modelConfiguration provides example SMS commands that illustrate a common manufacturer configuration flow.

## Configuration Overview

The goal of the configuration process is to prepare the WarriorX 100 to communicate reliably with Plaspy, validate network connectivity, and enable the device to appear in the Plaspy platform for monitoring and alerts.

- Configure the device to use the Plaspy server endpoint so telemetry and events are delivered to the platform.
- Provide APN and GPRS settings so the device can use mobile data to send reports.
- Choose transport and port settings (UDP or TCP on Plaspy port) consistent with the device interface.
- Validate reporting interval and update frequency so battery life and reporting needs are balanced.
- Verify the device is visible in Plaspy after applying settings and restarting if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and Plaspy will detect the protocol automatically so a single server endpoint and port can support multiple tracker types.

## Typical Requirements Before Setup

- A powered and accessible WarriorX 100 with battery or external power available.
- A valid SIM card with data and SMS capability inserted and active for APN and SMS configuration.
- APN credentials for the mobile operator including placeholders such as {{apn}}, {{apnu}}, and {{apnp}} if required by your operator.
- Access to a phone that can send SMS to the device or access to the official manufacturer configuration tool if available.
- The device password where required for commands (the sample configuration uses a default password of 0000).
- Manufacturer documentation or datasheet for any firmware specific instructions and command syntax.

## How This Tracker Connects to Plaspy

The WarriorX 100 is configured to report GNSS fixes and event telemetry to the Plaspy server endpoint and port. Once the GPRS server and APN are set correctly and transport is selected, the device will send periodic updates and event reports to Plaspy for live maps, alerts, and historical playback.

- Device reports are sent to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- The tracker may use UDP or TCP transport to send GPRS packets depending on your selection and network conditions.
- Plaspy automatically detects the tracker protocol on connection so the platform can parse incoming telemetry.
- Reporting intervals are configurable on the device to balance update frequency and battery life.
- Events such as movement, tamper, or low battery are forwarded to Plaspy once the device is pointing at the Plaspy server.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the WarriorX 100 such as the SMS command interface or the manufacturer software.
2. Prepare APN information for the mobile operator and confirm the SIM card is active in the tracker.
3. Enter the Plaspy server address using either the domain d.plaspy.com or the direct IP 54.85.159.138 per device capability.
4. Set the port to 8888 and choose UDP or TCP if the device requires transport selection.
5. Apply or save the configuration on the tracker and perform any required device restart.
6. Validate the tracker is reporting by checking for device activity in Plaspy and confirming inbound connections to the Plaspy server.
7. Adjust reporting interval or event thresholds as needed to achieve the desired balance of battery life and telemetry frequency.

## Example Configuration Commands

The WarriorX 100 modelConfiguration supports SMS-based setup. The sample manufacturer commands below use the device password 0000 which is the default in the provided example. Preserve placeholders when replacing APN values.

1. Set the time zone to UTC 0
```
GMT,0000,0#
```

2. Set the operator APN and credentials
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- Explanation: replace {{apn}} with your operator APN. If your operator requires username or password enter them in {{apnu}} and {{apnp}} or leave blank as appropriate.

3. Set the GPRS server to Plaspy using the Plaspy server IP and port
```
IP,0000,54.85.159.138 8888#
```
- This points the tracker to the Plaspy server endpoint and the shared Plaspy port used by all devices.

4. Set the periodic update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
- This example sets the reporting interval profile; follow manufacturer guidance for the TIMER syntax and power implications.

Note: Use the device password required by your unit. The example commands use 0000 as the factory default password shown in the public modelConfiguration snippet. If the password has been changed, substitute the current device password.

## Configuration Notes

- SMS based setup is supported by the example commands but manufacturer tools or USB configuration may also be available depending on firmware and hardware revision.
- Firmware versions and hardware revisions can change command syntax or available parameters; always verify commands against the latest manufacturer documentation.
- Choose UDP or TCP based on your network environment and the device options; both transports are supported when pointing to Plaspy on port 8888.
- All Plaspy devices use the same port and Plaspy will detect the tracker protocol automatically, so use the shared port value when configuring different tracker models.
- Keep APN values and operator credentials ready before sending configuration messages to reduce configuration cycles.

## Why Use Plaspy with This Configuration

Configuring the WarriorX 100 to report to Plaspy provides centralized visibility of asset locations, event alerts, and historical telemetry. For long-life outdoor assets, the combination of low-power reporting profiles on the WarriorX 100 and Plaspy ingestion allows teams to maintain situational awareness while minimizing maintenance and data costs.

To learn more about Plaspy and how it receives device telemetry visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and official command references consult the manufacturer documentation at https://www.topflytech.com/ which may change over time.
