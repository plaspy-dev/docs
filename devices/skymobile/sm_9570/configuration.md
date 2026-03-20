---
slug: /skymobile/sm_9570/configuration
id: sm_9570-configuration
sidebar_label: Configuration
title: SkyMobile - SM-9570 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SkyMobile SM-9570 setup with Plaspy using shared server settings and SMS commands
keywords:
  - SkyMobile SM-9570 configuration
  - SM-9570 Plaspy setup
  - SkyMobile GPS tracker setup
  - SM-9570 server configuration
  - SkyMobile tracking software configuration
  - SM-9570 GPS platform setup
  - Plaspy tracker configuration
  - SMS configuration SM-9570
  - GPRS server setup SM-9570
  - fleet tracking SM-9570
---

# SkyMobile - SM-9570 Configuration

This page documents the public configuration context for using the SkyMobile SM-9570 with the Plaspy platform. It explains the shared Plaspy server settings you must provide to the tracker, outlines the typical workflow for configuration, and includes example SMS commands published for the SM-9570 when available. Use this guide to prepare the device to communicate with Plaspy and to validate basic connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The SM-9570 supports SMS based configuration commands in the public examples below, so be sure to confirm device firmware and procedures with the manufacturer before applying changes.

## Configuration Overview

The purpose of the configuration process is to prepare the SM-9570 so it can communicate reliably with Plaspy, report location and input events, and appear in the Plaspy platform. This includes setting APN parameters, targeting the Plaspy server endpoint and port, tuning reporting intervals, and enabling any required inputs such as SOS or digital inputs.

- Ensure the device has valid network connectivity and an operator APN configured.
- Point the tracker at Plaspy using the shared server domain or IP and port.
- Choose the transport protocol if the device requires an explicit UDP or TCP selection.
- Configure reporting interval and enable any I O inputs needed for monitoring.
- Validate the tracker is visible in Plaspy after configuration and tune settings as required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the SM-9570 has a working SIM card with data and SMS capability and that you know the operator APN information.
- Power the device using a suitable 8 to 32V DC source as specified by the manufacturer.
- Have an SMS capable phone or an operator SMS gateway to send SMS configuration commands if using SMS configuration.
- Access to the official manufacturer configuration method or documentation from SkyMobile for your device firmware.
- A record of the device password or default password if the commands require authentication. The public examples below use the default password SM9570.
- Ensure you have the Plaspy server settings available for entry: d.plaspy.com or 54.85.159.138 and port 8888.

## How This Tracker Connects to Plaspy

The SM-9570 is configured to report location and events to the shared Plaspy server endpoint and port. Once the device has network access and the correct server settings, Plaspy will receive periodic location updates and event notifications, and the platform will automatically detect the tracker protocol.

- The tracker sends periodic location reports to the Plaspy server at d.plaspy.com on port 8888.
- Plaspy accepts connections over UDP or TCP depending on the tracker configuration.
- The platform automatically detects the tracker protocol to interpret incoming messages.
- Input events such as digital inputs or SOS button presses can be forwarded to Plaspy as configured on the device.
- After successful configuration the device should appear in Plaspy and start reporting according to the configured interval.

## Common Configuration Workflow

1. Access the official SkyMobile configuration method for your SM-9570, typically via SMS commands or the vendor configuration tool, and confirm the device firmware version.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires you to select one explicitly.
5. Configure APN and authentication as required by the mobile operator, using placeholders if needed for APN user and password.
6. Apply or save the configuration and restart the device if recommended by the manufacturer.
7. Validate connectivity by confirming the SM-9570 appears and reports in Plaspy and adjust reporting interval or inputs as necessary.

## Example Configuration Commands

The SM-9570 public configuration examples are typically applied via SMS. The device password is included in the command payload; the published examples use the default password SM9570. Preserve placeholders when replacing with your operator details.

- Reset factory settings (optional initial step)
```text
AT+GTRTO=SM9570,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=SM9570,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN
```text
AT+GTBSI=SM9570,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation: Replace [apn] with your mobile operator APN. If your operator requires an APN username or password, replace [apnu] and [apnp] accordingly. Leave placeholders blank if not required by the operator.

- Set the GPRS server to Plaspy using both domain and IP with port 8888
```text
AT+GTSRI=SM9570,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Note: This command shows both the Plaspy domain d.plaspy.com and the Plaspy server IP 54.85.159.138 with port 8888. The device may use either the domain or the IP depending on DNS availability.

- Set update interval to 60 seconds
```text
AT+GTFRI=SM9570,1,1,0,0,,,60,60,,,0,0,60,FFFFFFFF,0,0,0,FFFF$
```

- Enable digital inputs
```text
AT+GTDIS=SM9570,0,1,,,1,1,0,,2,1,0,,3,0,,,,,,,FFFF$
```

- Enable SOS button input 2
```text
AT+GTSOS=SM9570,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each command as an SMS message to the device. Keep the order of commands when following an initial configuration sequence, and send the reset command only when you need to restore factory defaults.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options. Confirm commands against the SkyMobile SM-9570 documentation for your device firmware.
- The public examples above use SMS based configuration. If your installation uses a vendor configuration tool or USB interface, consult the manufacturer documentation for equivalent steps.
- Choose UDP or TCP according to network and server requirements. Plaspy supports both and will detect the tracker protocol automatically.
- Plaspy uses the same port 8888 for all devices supported by the platform. Use that port when configuring server settings for the SM-9570.
- Preserve APN placeholders such as [apn], [apnu], and [apnp] when preparing commands and replace them with operator specific values.

## Why Use Plaspy with This Configuration

Using the SM-9570 with Plaspy gives fleet operators a straightforward path to collect periodic vehicle location data, monitor input events, and centralize tracking on a single platform. The SM-9570's periodic reporting and input options make it a practical device to integrate into operations that require consistent visibility and event notifications.

To learn more about Plaspy and how this configuration fits into the platform visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer documentation verify setup details at the official SkyMobile site http://www.skymobile.com.co. Manufacturer specifications and configuration methods can change over time so always confirm current procedures with SkyMobile documentation.
