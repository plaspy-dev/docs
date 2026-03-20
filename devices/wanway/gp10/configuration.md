---
slug: /wanway/gp10/configuration
id: gp10-configuration
sidebar_label: Configuration
title: WanWay - GP10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for WanWay GP10 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - WanWay GP10 configuration
  - WanWay GP10 setup
  - WanWay GP10 Plaspy
  - WanWay GP10 GPS tracker setup
  - WanWay GP10 server configuration
  - WanWay GP10 SMS commands
  - WanWay GP10 APN settings
  - GP10 tracking configuration
  - GP10 device configuration
  - WanWay GPS tracker configuration
---

# WanWay - GP10 Configuration

This page explains the public configuration context for using the WanWay GP10 personal tracker with the Plaspy platform. It covers the practical server settings and the common SMS commands that are publicly available for configuring the GP10 so it can report location and status to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GP10 configuration shown here uses SMS based commands provided in public WanWay guidance to set APN, GPRS server, reporting interval, and to enable GPRS reporting.

## Configuration Overview

Configuring the GP10 for Plaspy ensures the device can reach the Plaspy data endpoint, report position and status, and become visible within the Plaspy platform. The process generally uses the device SMS command interface to set network credentials and server parameters so the GP10 sends data over mobile data to Plaspy.

- Set the carrier APN so the device can establish a data connection
- Configure the GP10 to point to the Plaspy server domain or IP and the shared port
- Define reporting intervals so updates arrive at the expected cadence in Plaspy
- Enable GPRS reporting mode on the device so it sends data to Plaspy
- Verify configuration using device status or parameter checks before final installation

## Plaspy Server Settings

When configuring the GP10 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so the GP10 only needs to be pointed at the correct domain or IP and port.

## Typical Requirements Before Setup

- A GP10 device with sufficient battery charge or connected to a power source for configuration
- A valid SIM card with mobile data activated and the carrier APN information available
- Ability to send SMS commands to the GP10 (SMS setup is the published configuration method)
- Access to the official WanWay configuration instructions or software for reference
- A place to safely power cycle or restart the device after applying configuration
- Awareness that firmware versions and vendor tools can change command syntax or behavior

## How This Tracker Connects to Plaspy

The GP10 is configured to send its location and device status to the shared Plaspy server endpoint and port. Once the APN and server are set and GPRS mode is enabled, the device will use the mobile network to reach Plaspy for real time tracking and event reporting.

- The device uses mobile data (GPRS) to open a connection to the Plaspy endpoint
- It reports GPS positions and status messages to d.plaspy.com or the Plaspy IP address
- Data is sent to port 8888 which Plaspy uses for all devices
- Plaspy detects the tracker protocol automatically so no protocol selection in the platform is required
- Plaspy makes the reported data available for monitoring, geofence alerts, and historical playback

## Common Configuration Workflow

1. Access the official WanWay GP10 configuration method or vendor instructions; for GP10 the published method uses SMS commands.
2. Enter the APN for the device SIM so the tracker can use mobile data.
3. Configure the server as d.plaspy.com or 54.85.159.138 and set port 8888.
4. Choose UDP or TCP if the device requires a transport selection in its server command.
5. Apply or save the configuration by sending the SMS commands to the GP10 and follow any vendor confirmation replies.
6. Restart or power cycle the device if recommended by WanWay or if the device requires it to apply network settings.
7. Validate that the device reports to Plaspy by checking device status responses and confirming visibility on the Plaspy platform.

## Example Configuration Commands

The WanWay GP10 public configuration is performed via SMS commands. Below are the cleaned and preserved commands from the WanWay public guidance. Keep the order when applying these as order matters for network activation in many workflows.

- Configure the carrier APN
This command sets the APN the device will use to register on the mobile data network. Replace the placeholders with your carrier values. The username and password fields are optional depending on the carrier.

```
APN,{{apn}}#
```

Or if your APN requires username and password:

```
APN,{{apn}},{{apnu}},{{apnp}}#
```

(Explanation of placeholders: {{apn}} is the APN name provided by your mobile carrier. {{apnu}} is an APN username if required. {{apnp}} is an APN password if required.)

- Set the GPRS server to Plaspy using the domain and port
This sets server index 1 to point at the Plaspy server domain and port.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternative using Plaspy server IP
If you prefer to use the Plaspy server IP instead of the domain, use:

```
SERVER,1,54.85.159.138,8888,0#
```

- Set the reporting interval timer
This example sets reporting timers. The numeric values follow the device command syntax.

```
TIMER,60,60#
```

- Enable GPRS reporting mode
This command switches the device to GPRS mode so it can send data to the configured server.

```
GPRSON,1#
```

- Verify configuration parameters
Use this command to request the current configuration parameters from the device.

```
PARAM#
```

- Check device status
Request a status report from the device to confirm current state and connectivity.

```
STATUS#
```

Use the device replies to confirm each step completed successfully. If the GP10 returns error messages, consult WanWay documentation for the precise meaning and recommended corrective actions.

## Configuration Notes

- SMS based configuration is the published method for GP10; behavior and supported commands may vary by firmware revision.
- You can use either d.plaspy.com or 54.85.159.138 as the server target; both point to the same Plaspy endpoint and Plaspy listens on port 8888 for all devices.
- Choose UDP or TCP transport per the device command requirements; Plaspy will automatically detect the device protocol on receipt.
- Always preserve placeholder fields such as {{apn}} and only replace them with your carrier credentials.
- If a configuration change does not take effect, try saving the settings and restarting the device, and re-check with PARAM# and STATUS#.

## Why Use Plaspy with This Configuration

Configuring the WanWay GP10 to report to Plaspy gives organizations and individuals a straightforward path to real time location visibility, event notifications, and centralized monitoring. Using the shared Plaspy server settings reduces per device complexity and lets Plaspy handle protocol detection so devices become visible in the platform with consistent server configuration.

To learn more about Plaspy and how it manages device connections visit https://www.plaspy.com. For the most current WanWay GP10 device specific instructions, firmware notes, and manufacturer details verify information on the official WanWay site https://www.wanwaytech.net/ as vendor steps and firmware behavior can change over time.
