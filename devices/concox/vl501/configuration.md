---
slug: /concox/vl501/configuration
id: vl501-configuration
sidebar_label: Configuration
title: Concox - VL501 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration and SMS setup guidance for Concox VL501 to connect with Plaspy using shared server settings
keywords:
  - Concox VL501 configuration
  - Concox VL501 setup
  - VL501 Plaspy integration
  - VL501 GPS tracker configuration
  - Concox tracker server configuration
  - VL501 tracking software configuration
  - VL501 GPS platform setup
  - Plaspy device configuration
  - Concox VL501 installation
  - VL501 fleet tracking
---

# Concox - VL501 Configuration

This page covers the public configuration context for using the Concox VL501 tracker with Plaspy. It explains the shared server settings Plaspy requires and shows the practical, publicly available SMS commands and workflow commonly used to prepare a VL501 for reporting to the Plaspy platform.

Plaspy uses a common server endpoint and port for all supported devices and automatically detects the tracker protocol at connection time. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor-provided tools; where possible this document references the VL501 SMS commands that are commonly used to apply the public Plaspy server settings.

## Configuration Overview

Preparing a VL501 for Plaspy means configuring its cellular and GPRS settings so the device can send GNSS positions and events to Plaspy's shared server endpoint and port. The example SMS commands below show common steps used by installers to set time zone, APN, server endpoint, reporting frequency, and GPRS mode.

- Configure the device APN so it can establish a data connection to Plaspy
- Point the device server settings to the Plaspy server domain or IP and use the same port Plaspy expects
- Set a reporting interval so positions and events are sent at the desired cadence
- Enable GPRS/data mode so buffered location and events upload to Plaspy when coverage is available
- Validate the tracker reports to Plaspy and verify visibility on the platform

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured to use UDP or TCP)
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered VL501 with access to its SMS configuration interface or the official manufacturer configuration tool
- An active data capable SIM card installed and APN information available
- Ability to send SMS commands to the device phone number or use the Concox configuration tool
- Note or record the device IMEI so you can identify it in Plaspy after provisioning
- Cellular coverage in the deployment area to allow GPRS registration and reporting
- Access to a Plaspy account or provisioning workflow to confirm the device becomes visible after configuration

## How This Tracker Connects to Plaspy

The VL501 is configured to report its GNSS positions and event telemetry to Plaspy using the shared Plaspy server endpoint and port. Once the device has a working APN and GPRS mode enabled, it will establish a TCP or UDP connection to the Plaspy server and upload buffered and live data so the device appears on the platform.

- The device sends location and event messages to the Plaspy endpoint d.plaspy.com or directly to 54.85.159.138 on port 8888
- Plaspy automatically detects the device protocol when the tracker connects on the shared port
- Buffered data stored locally on the VL501 is uploaded to Plaspy when the cellular link is available
- Telemetry and events such as motion, unplug, geo-fence and SOS are delivered to Plaspy for alerting and reporting
- Using TCP or UDP is configurable on the device if the firmware requires explicit transport selection

## Common Configuration Workflow

1. Access the official Concox SMS configuration method or use the Concox configuration software recommended by the manufacturer
2. Set the device time zone and operator APN using SMS or the manufacturer tool
3. Enter the Plaspy server settings by using either the server domain d.plaspy.com or the server IP 54.85.159.138 and set port 8888
4. Choose UDP or TCP transport if the device requires a transport selection during server setup
5. Enable GPRS or data mode on the device and set the reporting timer or heartbeat interval
6. Apply and save the configuration, then restart the device if the device requires a reboot to apply changes
7. Validate the device reports to Plaspy by confirming the device appears and sends data to the platform

## Example Configuration Commands

The VL501 can be configured using SMS commands. Below are the commonly published commands in the order often used when provisioning a device for Plaspy.

- Optional initial factory reset (use only when required)
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
- Replace [apn] with your SIM provider APN. If your operator requires username or password, include [apnu] and [apnp] as needed.
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy using the domain and port
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP and port
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting update interval to every 60 seconds (two common command formats)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Check current parameter settings
```
GPRSSET#
```

Notes on placeholders and alternatives:
- [apn] is a placeholder for your SIM operator APN. If your operator requires a username or password for the APN, include the placeholders [apnu] and [apnp] as provided.
- The SERVER command examples show two ways to set the endpoint: one with the Plaspy domain and one with the Plaspy IP address. Use the form your provisioning policy requires.
- The FACTORY# command resets device settings to factory defaults and should be used only when necessary during an initial setup or troubleshooting session.

## Configuration Notes

- SMS based configuration is a common and manufacturer documented method for the VL501; use the official Concox command reference for any alternate or extended commands
- Firmware variations or hardware revisions can change available commands and behavior; confirm commands against the device firmware version
- Choose TCP or UDP transport per installation requirements; Plaspy accepts both and will detect protocol automatically at connection time
- Preserve placeholders such as [apn] when composing SMS commands and replace them with your specific APN details before sending
- All devices in Plaspy use the same port and Plaspy will automatically detect the device protocol when the tracker connects on port 8888

## Why Use Plaspy with This Configuration

Configuring the Concox VL501 to report to Plaspy provides a straightforward path to real time tracking, event monitoring, and fleet level reporting using shared server settings. The VL501’s plug and play design, buffering behavior, and event set make it practical for fast deployment while Plaspy delivers centralized visibility, alerting, and historical playback.

To learn more about Plaspy visit https://www.plaspy.com. Confirm device specific configuration methods and the latest manufacturer details at the Concox website https://www.iconcox.com/ since firmware behavior and manufacturer instructions can change over time.
