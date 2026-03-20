---
slug: /sentar/v80/configuration
id: v80-configuration
sidebar_label: Configuration
title: Sentar - V80 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar V80 showing Plaspy server settings and SMS setup commands to connect this model to Plaspy
keywords:
  - Sentar V80 configuration
  - Sentar V80 setup
  - Sentar V80 server configuration
  - Sentar V80 Plaspy
  - Sentar V80 GPS tracker
  - Sentar V80 SMS setup
  - Sentar V80 APN settings
  - Sentar V80 tracking software configuration
  - Sentar V80 platform setup
  - Sentar GPS tracker configuration
---

# Sentar - V80 Configuration

This page documents the public configuration context for using the Sentar V80 tracker with Plaspy. It consolidates the key, publicly available setup steps and SMS commands needed to point the device to Plaspy so that location and device reports can be received. The content here is intended for technical users and installers preparing the V80 for integration with the Plaspy platform.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. Where available this guide includes the V80 SMS commands used in common public flows while encouraging you to validate firmware specific details with Sentar.

## Configuration Overview

The configuration process for the Sentar V80 prepares the tracker to communicate reliably with the Plaspy backend and to report location and device state for monitoring. The V80 supports SMS based configuration and GPRS server settings that are commonly used to integrate with cloud platforms like Plaspy.

- Configure the tracker to send data to the Plaspy server endpoint and port so the platform can accept reports.
- Set the device APN and GPRS parameters so the tracker has mobile data connectivity for reporting.
- Verify device identity and network registration using IMSI or status check commands.
- Optionally perform a factory reset before first configuration to ensure a known state.
- Validate reporting by confirming the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy settings used to point the Sentar V80 at the Plaspy platform. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol.

## Typical Requirements Before Setup

- A charged and powered Sentar V80 tracker in a state ready to receive SMS or GPRS configuration.
- A valid SIM card with mobile data and SMS enabled and any required PIN removed.
- Access to the device IMEI and the device password (default password shown in the example commands below).
- The operator APN, username, and password for the SIM card (or placeholders if provided by the operator).
- Access to the official Sentar configuration method such as SMS commands or the vendor configuration tool.
- A way to receive device verification messages (phone for SMS responses or access to the Plaspy account to watch for reports).

## How This Tracker Connects to Plaspy

When configured, the Sentar V80 sends periodic location and device messages to the Plaspy server endpoint so position and status are visible in the platform. The device is set to report to the shared Plaspy endpoint and port so Plaspy can ingest and display the data.

- The tracker is pointed to the Plaspy server domain or IP and to port 8888 for data upload.
- Data transport can use UDP or TCP depending on device selection during setup.
- Plaspy automatically detects the tracker protocol when the device connects to the server.
- The device sends periodic uploads and status checks that appear as telemetry in Plaspy.
- Verification is performed by checking the device status in Plaspy or by using the tracker verification SMS command.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the V80 such as SMS commands or vendor software as documented by Sentar.
2. Enter the Plaspy server as either d.plaspy.com or the IP address 54.85.159.138 in the server configuration settings.
3. Set the port value to 8888, which is the port used by Plaspy for all supported devices.
4. Choose UDP or TCP for transport if the V80 requires selecting a transport type.
5. Set the device APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the tracker if the device requires a reboot to apply changes.
7. Validate the device reports to Plaspy by checking the device appears in your Plaspy account or by using the device check command to confirm settings.

## Example Configuration Commands

The Sentar V80 may be configured by sending SMS commands to the device. The sample public commands below use the device default password 123456. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when substituting your operator values. Replace xxxyy with the MCC and MNC string if required.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```
pw,123456,factory#
```

- Set the time zone to UTC 0:
```
pw,123456,lz,0,0#
```

- Check the IMSI and network operator information:
```
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy is the MCC and MNC combined:
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Set the GPRS server to Plaspy using the public IP and port 8888 (this command points the device to Plaspy):
```
pw,123456,ip,54.85.159.138,8888#
```

- Set the position upload interval to 300 seconds:
```
pw,123456,upload,300#
```

- Verify current tracker settings:
```
pw,123456,ts#
```

Notes on placeholders:
- {{apn}} is the mobile data access point name for the SIM operator.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.
- xxxyy is the combined MCC and MNC values when required by the device for operator selection.

## Configuration Notes

- Sentar firmware versions and vendor tools can change command syntax and available features; confirm commands match your device firmware.
- The V80 supports SMS based configuration flows as shown above; ensure SMS messages are sent from a phone number allowed by the device if the tracker uses number whitelisting.
- Choose TCP or UDP transport according to installation needs; both are supported and Plaspy will accept data on port 8888 using either transport.
- Keep the device default password in mind; if your device has a different password set by the vendor, use the active password in commands.
- Using the device IP command to 54.85.159.138 sets the tracker to send to Plaspy; where supported you can use the domain d.plaspy.com in configuration tools that accept hostnames.

## Why Use Plaspy with This Configuration

Configuring the Sentar V80 to report to Plaspy provides a straightforward way to collect location and device state information from child tracking devices on a centralized platform. With the shared Plaspy server settings and automatic protocol detection, integration is streamlined—pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and validating reporting is usually sufficient to begin receiving data.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and official configuration details consult the manufacturer documentation at http://www.sentarsmart.com/ as device methods and firmware may change over time.
