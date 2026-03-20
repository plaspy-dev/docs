---
slug: /sentar/d35/configuration
id: d35-configuration
sidebar_label: Configuration
title: Sentar - D35 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the Sentar D35 smartwatch tracker for use with Plaspy including server settings SMS commands and workflow
keywords:
  - Sentar D35 configuration
  - Sentar D35 setup
  - Sentar D35 Plaspy
  - Sentar D35 server configuration
  - D35 GPS tracker setup
  - kids smartwatch GPS configuration
  - Plaspy tracker configuration
  - GPS tracker SMS commands
  - D35 APN setup
  - device to server configuration
---

# Sentar - D35 Configuration

This page documents the public configuration context for using the Sentar D35 smartwatch tracker with the Plaspy platform. It summarizes the shared Plaspy server settings and explains the practical steps you can use to point a D35 tracker to Plaspy. The D35 is a 4G Android based kids GPS tracker in a smartwatch form factor and supports SMS based configuration commands that are commonly used to set APN and server parameters.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The D35 modelConfiguration includes SMS commands and a default device password 123456 that are useful for initial setup, APN configuration, and pointing the device to the Plaspy server endpoint.

## Configuration Overview

The goal of this configuration process is to prepare the D35 to reliably communicate location and status updates to Plaspy so caregivers can view real time positions, receive alerts, and monitor device health. For the D35 this typically means using the manufacturer supported configuration path (SMS commands or vendor tools) to set network APN values, the GPRS server address, transport type, and an upload interval.

- Configure the D35 APN and credentials so it can register on the mobile network and send GPRS data.
- Point the device to the Plaspy server domain or IP so telemetry is delivered to your Plaspy account.
- Choose transport (UDP or TCP) and set the standard Plaspy port to ensure compatibility.
- Set an appropriate upload interval so the tracker reports at the desired frequency.
- Verify configuration using the D35 verification commands and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections

These are the public Plaspy endpoint values to use when configuring the D35 so the device can deliver location and event data to Plaspy.

## Typical Requirements Before Setup

- A powered D35 device with a charged battery and the ability to receive SMS messages for SMS based configuration.
- An active nano SIM with voice and data enabled and the correct operator APN information.
- Access to the manufacturer configuration method such as SMS commands or the vendor configuration tool.
- Knowledge of the device password or PIN for configuration. The provided public documentation shows a default password of 123456.
- A record of the device identifier used by Plaspy if required by your account onboarding process.
- Basic access to Plaspy so you can verify the device appears and sends telemetry after configuration.

## How This Tracker Connects to Plaspy

When configured, the D35 sends location and status updates from the watch to the shared Plaspy server endpoint and port. Plaspy ingests these updates and presents them on maps, dashboards, and notification channels so caregivers can monitor movement, receive SOS alerts, and view device state.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Transport is selectable as UDP or TCP depending on device options; Plaspy accepts both and will automatically detect the tracker protocol.
- Regular upload intervals deliver position updates so Plaspy can show near real time location on the map.
- SOS and status events generated on the device are sent to Plaspy for alerting and incident workflows.
- Plaspy logs device connectivity and can indicate when a device is offline or reporting poor network conditions.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the D35, for example the SMS configuration channel or a vendor tool supplied by Sentar.
2. If desired and supported, perform a factory reset as an initial step to clear previous settings, otherwise proceed to update only server and APN settings.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device GPRS server settings.
4. Set the port to 8888. Plaspy uses the same port for all supported devices so use 8888 consistently.
5. Choose UDP or TCP as the transport if the device requires a transport selection. Plaspy accepts either and will auto detect the protocol.
6. Configure the operator APN and any APN username or APN password as required by the SIM operator.
7. Apply or save the configuration and restart the device if the device requires a reboot to apply changes.
8. Validate the device reports to Plaspy by checking the device status in Plaspy and using the device verification command to view current settings.

## Example Configuration Commands

The D35 supports SMS based configuration commands. The following public commands are provided in the manufacturer modelConfiguration and are presented here in the same order. The sample setup uses the default device password 123456 as shown. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN values.

- Optional initial factory reset
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC or IMSI information
```text
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN, {{apnu}} is the APN username, {{apnp}} is the APN password and xxxyy represents MCC and MNC if required
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Set GPRS server to Plaspy using the public server IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds
```text
pw123456,upload,300#
```

- Verification command to check current settings
```text
pw,123456,ts#
```

Notes on the commands above:
- The commands are presented as supplied in the public modelConfiguration. Some firmware or regional variants may use slightly different separators or syntax. Confirm exact command syntax with the device manual.
- Placeholders: {{apn}} = operator APN, {{apnu}} = APN username, {{apnp}} = APN password.
- The factory reset command is optional and should be used only when you need to restore factory defaults.

## Configuration Notes

- SMS based configuration is a common method for this device but some vendors provide PC or mobile tools; use whichever official method matches your deployment and firmware.
- Firmware and hardware revisions can change command syntax or available features; always verify with the current Sentar documentation for your device revision.
- Choose TCP or UDP according to installation needs; Plaspy supports either and will automatically detect the tracker protocol on port 8888.
- After initial configuration change the default device password where possible and document the new password for administrators.
- Use the verification command to confirm APN, server IP or domain, and upload interval before finalizing installation.

## Why Use Plaspy with This Configuration

Using the Sentar D35 with Plaspy gives caregivers and organizations a straightforward way to receive real time location, SOS alerts, and device status from a wearable child focused tracker. The D35’s multi mode positioning and 4G connectivity combined with Plaspy’s shared server settings simplify onboarding and reduce the number of device specific server values to maintain.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details, firmware behavior, and manufacturer instructions on the Sentar website http://www.sentarsmart.com/ as manufacturers may update commands and setup methods over time.
