---
slug: /meitrack/vt_300/configuration
id: vt_300-configuration
sidebar_label: Configuration
title: Meitrack - VT-300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack VT 300 showing Plaspy server settings and SMS commands for basic platform integration
keywords:
  - Meitrack VT 300 configuration
  - Meitrack VT 300 setup
  - VT 300 Plaspy configuration
  - VT 300 server setup
  - Meitrack GPS tracker configuration
  - VT 300 SMS setup
  - Meiligao protocol tracker setup
  - GPS tracker platform integration
  - vehicle tracking configuration
  - fleet management tracker setup
---

# Meitrack - VT-300 Configuration

This page documents the public configuration context for using the Meitrack VT-300 with Plaspy. It describes the shared server settings Plaspy uses, the common SMS commands exposed in public device guidance, and the practical steps you can follow to prepare a VT-300 to report location data to the Plaspy platform.

Plaspy uses a set of shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and local vendor tools, so use this guide together with the official Meitrack documentation and installer tools where needed.

## Configuration Overview

The VT-300 is configured to send location and status data to a remote tracking server using SMS for setup and GPRS for ongoing reporting. The public configuration flow for this device typically sets a device identifier, configures the mobile data APN, and points the device to the Plaspy server endpoint and port so the tracker can begin reporting.

- Prepare the VT-300 to communicate with Plaspy by setting its device ID and network parameters.
- Configure the APN and GPRS server information so the device can open a TCP or UDP connection.
- Point the tracker to Plaspy using the shared server endpoint so the platform can receive telemetry.
- Validate connectivity by checking that the tracker reports to the Plaspy server and appears in the platform.
- Use manufacturer SMS commands or the official configuration utility to apply the settings when supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All Plaspy devices use the same port for reporting, and the platform detects the tracker protocol automatically when the device connects.

## Typical Requirements Before Setup

- A powered VT-300 device with an active SIM card that has GPRS data enabled if you plan to use GPRS reporting.
- Access to the device IMEI and installer credentials where required by the manufacturer.
- Ability to send SMS commands to the device or access to the official Meitrack configuration tool.
- Knowledge of the correct APN for the SIM operator; placeholders are used in example commands where applicable.
- A plan to verify connectivity from the device to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

The VT-300 is configured to report location data to the shared Plaspy server endpoint and port. Once the GPRS parameters are set, the tracker opens a TCP or UDP connection to the configured address and sends position and event messages using its native protocol. Plaspy receives these messages and maps them to the associated device record.

- The device is pointed at the Plaspy server domain or IP and uses port 8888 for reporting.
- The tracker can connect using UDP or TCP depending on the configuration you choose.
- Plaspy automatically detects the Meiligao or other supported tracker protocol when messages arrive.
- After successful registration, position updates and status events appear in the Plaspy platform for monitoring.
- Regular update intervals and alarms configured on the device drive the frequency of reports to Plaspy.

## Common Configuration Workflow

1. Access the official Meitrack configuration method or software, or prepare to send SMS setup commands as documented by Meitrack.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server or GPRS server fields.
3. Set the reporting port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure the APN and any APN username or password required by your SIM operator.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy by confirming it appears in the platform and is sending position updates.

## Example Configuration Commands

The VT-300 public setup can be performed by sending SMS configuration commands to the device. The sample commands below follow the public example where the device password is 000000 by default. Replace placeholders as needed and ensure you use the correct IMEI digits for device ID.

- Set device ID using the first 14 IMEI digits
```
W000000,010,{{imei.substring(0,14)}}
```

- Set APN operator and optional APN username and password
```
W000000,011,{{apn}}{{#if apnu}},{{apnu}}{{/if}}{{#if apnp}},{{apnp}}{{/if}}
```
Note: In the public example the APN fields are shown as placeholders. Replace {{apn}} with your SIM operator APN. If your APN requires a username or password, replace {{apnu}} and {{apnp}} accordingly.

- Set GPRS server to the Plaspy server IP and port
```
W000000,012,54.85.159.138,8888
```
Alternatively you may be able to enter d.plaspy.com in the device configuration tool instead of the IP.

- Set update interval to 60 seconds
```
W000000,014,00006
```

- Enable GPRS mode
```
W000000,013,2
```

Important notes about these commands:
- The sample device password in the public commands is 000000. If your device password has been changed, use the current password instead of 000000.
- The command order shown here follows the public sample and is practical for initial setup: set device ID, APN, GPRS server, update interval, then enable GPRS.
- If you use a manufacturer configuration utility instead of SMS, the same values (APN, server address, port, transport) should be entered there.

## Configuration Notes

- Firmware differences across VT-300 units may change exact command formats or required fields; always check the device firmware notes.
- The device supports both SMS based setup and GPRS reporting; use the method that matches your installation workflow and security practices.
- Choose UDP or TCP based on network conditions and any requirements from Plaspy; both are supported and Plaspy handles protocol detection automatically.
- The Plaspy server can be entered as the domain d.plaspy.com or the IP 54.85.159.138 depending on the configuration tool you use.
- All devices configured for Plaspy use port 8888 for reporting; this is a shared port across the platform.

## Why Use Plaspy with This Configuration

Configuring the Meitrack VT-300 to report to Plaspy gives organizations a consistent server endpoint and a platform that automatically detects tracker protocols. This reduces per-device configuration complexity and speeds up deployment for fleets that use a mix of compatible trackers. With the VT-300 sending regular updates to Plaspy, operators can monitor vehicle locations, receive alarms, and use platform tools for operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware details, and manufacturer guidance verify configuration steps on the official Meitrack site at https://www.meitrack.com/.
