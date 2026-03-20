---
slug: /queclink/gv58cg/configuration
id: gv58cg-configuration
sidebar_label: Configuration
title: QuecLink - GV58CG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV58CG integration with Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GV58CG configuration
  - QuecLink GV58CG setup
  - QuecLink GV58CG server configuration
  - GV58CG Plaspy setup
  - GV58CG tracking configuration
  - QuecLink GPS tracker configuration
  - fleet tracker GV58CG configuration
  - GV58CG SMS commands
  - Plaspy tracker configuration
  - vehicle tracking GV58CG
---

# QuecLink - GV58CG Configuration

This page documents the public configuration context for using the QuecLink GV58CG with Plaspy. It summarizes the practical server settings and setup workflow that integrators commonly apply so the device can report locations and telemetry to Plaspy. Where available, example SMS configuration commands provided by the device manufacturer are shown as public guidance.

Plaspy uses a shared server endpoint and a single port for all supported trackers and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and configuration tool. The GV58CG supports SMS configuration and GPRS/APN based server settings, and the commands shown here reflect publicly available SMS command examples and placeholders for APN credentials.

## Configuration Overview

The objective of configuring the GV58CG for Plaspy is to prepare the device to send reliable location and status updates to the Plaspy platform, validate connectivity, and enable visibility on your Plaspy dashboard. The example steps below focus on setting network access, server destinations, reporting intervals, and basic alarm inputs so the device becomes operational with Plaspy.

- Configure the device APN and GPRS parameters so it can use cellular data to reach Plaspy.
- Point the device to the Plaspy server endpoint and port so telemetry is routed to the platform.
- Set reasonable reporting intervals and enable required input events for alerts and monitoring.
- Use SMS or the manufacturer configuration utility to upload these parameters and apply them.
- Verify the device appears in Plaspy and is reporting position updates and events.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888; the device may be configured to use either UDP or TCP  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and reachable GV58CG device with access to the configuration interface or SMS control number.  
- An active SIM with data and SMS enabled and an appropriate APN for the mobile operator.  
- Access to the manufacturer configuration method such as SMS commands or QuecLink configuration tools.  
- The device password for SMS configuration; the provided example uses the default password queclink.  
- A means to restart or cycle power on the device after applying configuration.  
- Access to Plaspy account or platform to validate device incoming data and visibility.

## How This Tracker Connects to Plaspy

When configured for Plaspy the GV58CG uses its cellular link to send position and event data to the shared Plaspy server endpoint and port. Plaspy receives the telemetry and automatically decodes the tracker protocol, making the device visible on the platform without per device port differences.

- Device reports location and telemetry over cellular GPRS or LTE to the Plaspy server d.plaspy.com or 54.85.159.138 on port 8888.  
- You can configure transport as UDP or TCP depending on device firmware and installer preference.  
- Reporting intervals and event triggers determine how often Plaspy receives updates and alarms.  
- Inputs such as SOS or ignition are reported as events to Plaspy for alerts and status tracking.  
- Once the device is sending data to the Plaspy endpoint, Plaspy identifies the tracker protocol automatically.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV58CG, such as SMS commands or the manufacturer software, and confirm the device password.  
2. Configure the APN and operator credentials so the device can connect to mobile data.  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
4. Set the port to 8888 and choose UDP or TCP if the device requires selecting a transport.  
5. Apply or save the configuration and, if required, restart or power cycle the device so settings take effect.  
6. Validate that the device successfully reports to Plaspy by checking incoming messages and position updates in your Plaspy account.  
7. Adjust reporting intervals and event inputs as needed for operational requirements.

## Example Configuration Commands

The GV58CG can be configured by SMS commands. The following public example commands are provided in manufacturer documentation. The device password used in these examples is the default password queclink. Commands are shown in the order suggested for initial setup. The APN placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your operator APN, APN username, and APN password as required.

1. Optional initial factory restore (use only when required)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the mobile operator APN and credentials
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the operator APN string.  
- {{apnu}} is the APN username if required.  
- {{apnp}} is the APN password if required.

4. Set the GPRS reporting server to Plaspy using both domain and IP examples and port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic location update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: The exact SMS command syntax and parameters may vary by firmware. Keep placeholders intact when editing commands and replace only with your actual APN values and credentials. Change the default SMS password as a security best practice after initial setup.

## Configuration Notes

- SMS based configuration is publicly documented for the GV58CG and is useful where direct software or USB access is not available.  
- Firmware variations can change command syntax or available parameters. Verify commands against the device firmware version.  
- Choose UDP or TCP based on your operational preferences and confirm the device firmware supports the transport you select.  
- After changing APN or server settings, allow time for the device to connect to the network and confirm GPRS registration before expecting server messages.  
- It is recommended to change the default SMS password (default shown as queclink) after successful configuration for improved security.

## Why Use Plaspy with This Configuration

Configuring the GV58CG to report to Plaspy gives fleet operators centralized access to location, status events, and sensor telemetry through a single server endpoint. Using the shared Plaspy server settings simplifies deployment because all supported devices use the same port and Plaspy automatically detects the tracker protocol, reducing per device configuration complexity.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official QuecLink documentation verify details on the manufacturer site https://www.queclink.com/ since manufacturer configuration methods and firmware behavior may change over time.
