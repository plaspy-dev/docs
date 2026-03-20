---
slug: /bofan/b4/configuration
id: b4-configuration
sidebar_label: Configuration
title: Bofan - B4 Configuration
sidebar_class_name: menu_item_tracker
description: Public Bofan B4 configuration guidance for connecting the tracker to Plaspy with server settings and example SMS commands
keywords:
  - Bofan B4 configuration
  - Bofan B4 setup
  - Bofan B4 server configuration
  - Bofan B4 Plaspy setup
  - B4 GPS tracker configuration
  - Bofan GPS tracker setup
  - B4 tracking software configuration
  - vehicle tracker Bofan B4
  - fleet tracking Bofan B4
  - Plaspy tracker configuration
---

# Bofan - B4 Configuration

This page documents the public configuration context for using the Bofan B4 GPS tracker with Plaspy. It focuses on the practical server settings, the typical setup workflow, and the SMS-based commands shown in public manufacturer guidance so you can prepare the device for communication with Plaspy's platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the instructions here as practical public guidance and verify device-specific details with the manufacturer documentation when needed.

## Configuration Overview

The goal of configuring a Bofan B4 for Plaspy is to prepare the tracker to report location and event data to the Plaspy server endpoint so the device becomes visible and manageable inside the Plaspy platform. The public Bofan commands show an SMS-based setup path that sets identifiers, APN, and the GPRS server address to point to Plaspy.

- Set the device identifier (GID) so Plaspy can map the tracker to an account or device record.
- Configure the carrier APN and optional APN username and password so the device can send GPRS data.
- Point the device GPRS server to Plaspy using the shared server endpoint and port.
- Adjust the reporting interval to balance real time visibility and data cost.
- Optionally perform a factory reset before configuration when recommended by the installer or manufacturer.

## Plaspy Server Settings

When configuring the Bofan B4 to work with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport the device requires
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged Bofan B4 unit installed or temporarily powered for configuration
- A SIM card with data enabled and SMS capability as the model supports SMS and GPRS configuration
- Access to the device IMEI to derive the device identifier if required
- Access to the official manufacturer configuration method such as SMS commands or vendor software
- Knowledge of the mobile operator APN and any APN username and password required by the SIM
- A note of the device default password if needed for commands (public example shows a default password of 000000)

## How This Tracker Connects to Plaspy

The Bofan B4 typically reports location and alert data to Plaspy by sending GPRS data to the shared Plaspy server endpoint and port. Initial setup is commonly performed over SMS to set the network and server parameters that enable GPRS reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com / 54.85.159.138 on port 8888)
- After APN and server are set, the device sends periodic updates so the asset appears in Plaspy
- Plaspy automatically detects the device protocol so you do not need to choose a protocol profile manually in the platform
- The device can use TCP or UDP transport to send data depending on device selection; Plaspy listens on the same single port for all devices
- Alerts and events configured on the device (for example geofence or ignition events) will be forwarded to Plaspy once reporting is active

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (SMS commands or vendor tool) as provided by Bofan.
2. Identify the IMEI and determine the 14-digit identifier the device uses with Plaspy (typically the last 14 digits of the IMEI).
3. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure the carrier APN and optional APN username and password so the device can use GPRS.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by checking device visibility and last reported time in the Plaspy platform.

## Example Configuration Commands

The Bofan public guidance includes SMS commands that are sent to the device to configure it. The device password in the sample configuration is 000000 and is shown here as the default password in the commands. Preserve placeholders where indicated.

- Optional factory reset (use only when required or as initial setup):
```text
000000DFT
```

- Set the 14-digit identifier (GID) used with Plaspy. Replace \\<14-digit-id> with the last 14 digits of the device IMEI:
```text
000000GID<14-digit-id>
```
Explanation: Use the last 14 digits of the IMEI as the identifier when requested by Plaspy.

- Set the APN of the mobile operator. Replace [apn] with your operator APN and include [apnu] and [apnp] if username or password are required:
```text
000000APN[apn],[apnu],[apnp]
```
Explanation: [apn] is the APN string from the SIM operator. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server to point to Plaspy. This uses the public Plaspy server IP and port:
```text
000000SVR54.85.159.138,8888
```
Alternative: If the device accepts a domain name, enter d.plaspy.com and port 8888 in your vendor tool or SMS command variant if supported.

- Set the position update interval to 60 seconds (1 minute):
```text
000000GTI60
```

Note: Keep commands in the order shown when the manufacturer indicates a required sequence. The factory reset command is optional and should only be used when you intend to clear prior configuration.

## Configuration Notes

- The default device password shown in public examples is 000000; verify the password for your unit as firmware or vendor provisioning may change defaults.
- SMS-based setup is supported in the public guidance, but some deployments use vendor software or configuration tools instead; use the method appropriate for your installation.
- Firmware revisions and regional variants can change command syntax or supported parameters; always verify with the current manufacturer documentation.
- Choose TCP or UDP based on the tracker firmware options; Plaspy accepts both transports and listens on the same port for all devices.
- When possible, test configuration with the device temporarily powered and in a location with good mobile coverage before final installation.

## Why Use Plaspy with This Configuration

Using the Bofan B4 with Plaspy provides a straightforward path to bring basic vehicle tracking, geofence alerts, and remote event monitoring into a single platform. Pointing the tracker to Plaspy's shared server endpoint and port allows the device to report position and alert data so fleet managers and vehicle owners can access operational visibility and tracking reports.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device-specific setup details, command syntax, and firmware notes verify the official Bofan documentation at https://www.bofancloud.com/ as manufacturer specifications and setup methods can change over time.
