---
slug: /istartek/vt900/configuration
id: vt900-configuration
sidebar_label: Configuration
title: iStartek - VT900 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the iStartek VT900 GPS tracker for use with Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - iStartek VT900 configuration
  - iStartek VT900 setup for Plaspy
  - VT900 GPS tracker configuration
  - VT900 server configuration
  - VT900 SMS setup
  - Plaspy tracker setup
  - VT900 GPRS configuration
  - vehicle tracking VT900
  - fleet tracking iStartek
  - VT900 protocol settings
---

# iStartek - VT900 Configuration

This page covers the public configuration context for using the iStartek VT900 GPS tracker with Plaspy. It collects the practical, publicly available settings and example commands that enable the VT900 to send location and status data to the Plaspy platform by SMS or GPRS so you can validate connectivity and visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the information here to prepare the VT900 for connection to Plaspy and then confirm any device specific details with iStartek documentation.

## Configuration Overview

This configuration process prepares the VT900 to report its position and events to the Plaspy tracking platform using the platform shared server endpoint and port. The steps generally set the device time zone, APN for cellular data, GPRS server destination, reporting interval, and provide a verification command to confirm parameters.

- Configure the device network APN so the tracker can use GPRS for data reporting.
- Point the VT900 to the Plaspy server using the public server domain or IP and the shared port.
- Choose UDP or TCP transport as required and save the settings on the device.
- Set a reporting interval suitable for your monitoring needs and power profile.
- Verify current parameters and confirm the device begins reporting to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered VT900 with a working SIM card able to use SMS and GPRS as required by your installation
- Knowledge of the mobile operator APN settings for the installed SIM
- Access to the VT900 manufacturer configuration method such as SMS commands or vendor software
- Basic ability to send SMS commands from a phone to the tracker if configuring by SMS
- A plan for a suitable reporting interval based on tracking frequency and battery or power constraints

## How This Tracker Connects to Plaspy

The VT900 can be configured to send data to Plaspy by setting its GPRS server destination to the Plaspy server domain or IP and using the shared port for all devices. Once configured, the tracker will transmit position data and event messages to the Plaspy endpoint where the platform automatically detects the tracker protocol and parses incoming data.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy accepts connections over UDP or TCP and detects the device protocol automatically
- Reports from the VT900 become visible in Plaspy after the device successfully registers and sends the first packets
- Event reporting such as SOS, geo fence, movement, and alerts are forwarded to Plaspy when enabled on the device
- Validation of connectivity can be performed by checking parameter response and observing inbound messages in Plaspy

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT900, for example SMS commands or the manufacturer software provided with the device.
2. Set the device time zone and local clock as required for accurate timestamps.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server host in the device settings.
4. Set the server port to 8888 and choose UDP or TCP transport if the tracker requires a transport selection.
5. Configure the operator APN so the tracker can use GPRS for data reporting.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device parameter response and confirming visible inbound messages on the Plaspy platform.

## Example Configuration Commands

The VT900 supports SMS based configuration. Below are the publicly available SMS commands that are commonly used to prepare the device for use with Plaspy. Preserve the placeholders when sending commands.

- Optional initial factory reset command
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN for GPRS access
```text
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and APN password placeholders. If your APN does not require username or password, you may only send APN,[apn]#.

- Set the GPRS server to Plaspy using domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy using IP and port
```text
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds
```text
TIMER,60#
```

- Verify current device parameters
```text
PARAM#
```

Note: Send each command as an individual SMS message to the VT900 according to the manufacturer SMS command format. The order above is practical for initial setup, and FACTORY# should be used only when you need to reset the device to factory defaults.

## Configuration Notes

- VT900 supports SMS and GPRS configuration methods; SMS is commonly used for field setup and is reflected in the example commands.
- Different firmware or hardware revisions may accept slightly different SMS formats or parameters. Confirm exact syntax with iStartek documentation for your device firmware.
- Choose TCP or UDP based on your deployment needs; Plaspy accepts both and will detect the protocol automatically.
- Plaspy uses port 8888 for all devices, so the server port setting is the same across supported trackers.
- If you change APN credentials, confirm connectivity by sending PARAM# and observing online updates in Plaspy.

## Why Use Plaspy with This Configuration

Using the iStartek VT900 with Plaspy provides a practical way to centralize vehicle and asset location data into a single platform that automatically recognizes the tracker protocol. The shared Plaspy server settings simplify device onboarding because the same port and server endpoint are used across supported devices, reducing per device configuration complexity.

If you want to learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details may change over time, so verify the latest setup information with iStartek at https://istartek.com/ before deploying.
