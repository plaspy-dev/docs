---
slug: /sinotrack/st_901l/configuration
id: st_901l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting SinoTrack ST-901L to Plaspy with server and SMS setup details for reliable vehicle tracking
keywords:
  - SinoTrack ST-901L configuration
  - SinoTrack ST-901L setup
  - SinoTrack ST-901L Plaspy
  - ST-901L server configuration
  - ST-901L SMS configuration
  - SinoTrack GPS tracker configuration
  - vehicle tracker setup Plaspy
  - ST-901L APN configuration
  - ST-901L GPRS setup
  - SinoTrack ST-901L integration
---

# SinoTrack - ST-901L Configuration

This page documents the public configuration context for using the SinoTrack ST-901L with Plaspy. It summarizes the practical steps and public SMS commands used to point the device at Plaspy’s servers and validate reporting so your ST-901L devices appear in Plaspy for real time tracking and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The commands shown below are the publicly available SMS configuration commands commonly used for this model and should be adapted to your firmware and operator settings as needed.

## Configuration Overview

The configuration process prepares the ST-901L to send location and event data to Plaspy reliably over cellular data. Typical goals are to set the APN for your SIM, configure the target server and port, enable periodic reports, and verify the device is visible in Plaspy.

- Configure the device APN and GPRS settings so the ST-901L can use mobile data to reach Plaspy.
- Set the Plaspy server endpoint and port so data packets are routed to Plaspy dashboards.
- Enable regular position update intervals and reporting modes to ensure timely telemetry.
- Verify the device configuration with the manufacturer verification command and confirm the device appears in Plaspy.
- Optionally restore factory settings or switch modes when troubleshooting initial installs.

## Plaspy Server Settings

- Server domain d.plaspy.com for platform DNS reference
- Server IP 54.85.159.138 as the public Plaspy endpoint
- Port 8888 used by Plaspy for all devices
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol so the platform accepts supported tracker formats without per device protocol selection

## Typical Requirements Before Setup

- A working vehicle power supply and access to the tracker for SMS configuration or installation
- An active SIM card with mobile data and SMS capability compatible with local operators
- The device IMEI available for registration or identification with your tracking account if required
- Access to the official manufacturer configuration method or SMS commands for the ST-901L
- Basic knowledge of your network operator APN, and username or password if required

## How This Tracker Connects to Plaspy

The ST-901L is configured to send GPRS data packets to Plaspy’s shared server endpoint and port so position updates and alarms arrive in the Plaspy platform. After SMS configuration to set APN and server, the tracker will transmit periodic reports and event messages that Plaspy processes and displays.

- The device is pointed at the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) and port 8888 for reporting
- Tracker can use UDP or TCP transport when configured on the device
- Position updates and alarms are sent over the cellular GPRS/4G channel to Plaspy
- Events such as ACC status, power off alarm, geo fence triggers, and over speed alerts are forwarded to Plaspy once the device is reporting
- Plaspy uses automatic protocol detection so the platform accepts the tracker data without manual protocol selection

## Common Configuration Workflow

1. Access the official manufacturer configuration method or SMS command workflow for the ST-901L.
2. Make sure the device has a working SIM and the correct operator APN information at hand.
3. Enter the Plaspy server address by using either the server domain d.plaspy.com or the server IP 54.85.159.138 in your device configuration.
4. Set the device port to 8888 as required by Plaspy and select UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the tracker using the manufacturer SMS commands or configuration tool.
6. Restart or cycle power on the device if the manufacturer advises a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and using the device verification command.

## Example Configuration Commands

The ST-901L supports step by step SMS configuration. Send these SMS commands in the order shown as part of initial setup or troubleshooting. Maintain the order where noted and replace placeholders with your operator values.

- Optional initial or factory reset step (use only when required)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the operator APN and optional username and password
```text
8030000 [apn] [apnu] [apnp]
```
Explanation: keep the placeholders as shown. [apn] is your mobile operator APN. [apnu] is the APN username and [apnp] is the APN password. If your operator does not require username or password, leave those fields blank as specified by the device instructions.

- Configure the GPRS server to point to Plaspy by IP and port
```text
8040000 54.85.159.138 8888
```
Note: Plaspy also uses the domain d.plaspy.com but this device example uses the numeric IP. Use whichever form the device or your installation requires.

- Set periodic position update interval while the device is on
```text
8050000 60
```

- Set periodic position update interval when the device is off
```text
8090000 60
```

- Switch the device to GPRS mode
```text
7100000
```

- Verify current device settings
```text
RCONF
```
Explanation: RCONF returns current configuration including the device ID used by Plaspy. Use it to confirm APN, server, port, and reporting intervals.

## Configuration Notes

- SMS based configuration is supported and commonly used for the ST-901L; follow vendor SMS syntax exactly and preserve placeholder formatting.
- Firmware revisions and regional variants may change command syntax or available parameters; confirm commands against your device firmware documentation.
- Choose UDP or TCP transport based on installer preference and device capability; Plaspy accepts both and automatically detects the tracker protocol on its side.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across a mixed fleet.
- If you change server settings, verify with RCONF and check device reporting in Plaspy to confirm connectivity.

## Why Use Plaspy with This Configuration

Using the SinoTrack ST-901L with Plaspy provides a compact, discreet tracking solution that can be quickly pointed at the shared Plaspy server for real time location and alarm reporting. The ST-901L’s SMS configuration method makes it straightforward to set APN and server details in the field, while Plaspy’s automatic protocol detection and unified port policy reduce per device configuration complexity.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific commands, firmware behavior, and manufacturer guidance on the official SinoTrack site https://www.sinotrackgps.com/ to ensure your setup matches current device documentation and local operator requirements.
