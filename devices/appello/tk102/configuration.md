---
slug: /appello/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Appello - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Appello TK102 showing Plaspy server settings and SMS commands for connecting the device to Plaspy
keywords:
  - Appello TK102 configuration
  - Appello TK102 setup
  - Appello TK102 server configuration
  - TK102 Plaspy setup
  - TK102 GPS configuration
  - Appello GPS tracker configuration
  - Plaspy tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - GSM GPRS tracker setup
---

# Appello - TK102 Configuration

This page covers the public configuration context for using the Appello TK102 GPS tracker with Plaspy. It explains the practical steps and public commands commonly used to point the device at Plaspy servers, how to verify connectivity, and what to check before the device becomes visible in the Plaspy platform. Where manufacturer SMS commands are publicly available they are included here as examples for reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify integration. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so verify device-specific behavior in the official manufacturer documentation when needed. The TK102 supports GSM and GPRS and is commonly configured via SMS commands or the vendor toolset; this guide uses that public, SMS-based configuration flow where available.

## Configuration Overview

Configuring an Appello TK102 for Plaspy prepares the device to send location and status messages to the Plaspy server endpoint so the unit appears in your fleet view. The process shown here focuses on setting operator APN parameters when required, assigning the Plaspy server and port, choosing transport where applicable, and verifying the device reports correctly.

- Set the device APN and optional APN credentials so the tracker can use GPRS data to reach Plaspy.
- Configure the Plaspy server address or IP and the shared Plaspy port used for all devices.
- Select UDP or TCP transport if the device requires an explicit choice for GPRS uploads.
- Apply the configuration and, when available, use the device verification command to confirm settings.
- Validate that the device appears in Plaspy and that location updates are being received.

## Plaspy Server Settings

Use the following public Plaspy server settings in your TK102 configuration as provided for Plaspy compatibility:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that the platform performs automatic protocol detection, so the tracker only needs the correct server host and port plus a compatible transport choice where the device requires it.

## Typical Requirements Before Setup

- A charged TK102 with a working SIM card that has GPRS data and SMS capability if you will configure via SMS.
- Access to the device password (the public example commands use the default password 123456).
- The mobile number for sending SMS configuration commands or access to the manufacturer configuration tool where applicable.
- The operator APN and optional APN username and password for the cellular provider.
- A safe testing environment where the device can get a clear GPS fix and stable GPRS connectivity.
- The official manufacturer manual for model TK102 to confirm any firmware-specific command formats.

## How This Tracker Connects to Plaspy

The TK102 uses GPRS to send location and device data to a Plaspy endpoint configured on the device. When configured with the Plaspy server address and port, the tracker will upload position messages over the chosen transport so the device is visible in the Plaspy platform.

- The tracker is pointed at d.plaspy.com or the Plaspy server IP 54.85.159.138.
- The tracker sends data to port 8888, the shared Plaspy port used by all devices.
- You may choose UDP or TCP transport on the device where the firmware requires an explicit selection.
- Plaspy automatically detects the tracker protocol so uploads are interpreted correctly once the server and port are set.
- Once reporting, location and status updates become available for monitoring in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or vendor software for the TK102.
2. Ensure the device has a working SIM and that you know the operator APN and any APN credentials.
3. Enter the Plaspy server name d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device configuration.
4. Set the device port to 8888, which is the port Plaspy uses for all supported devices.
5. Choose UDP or TCP if the tracker requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend it.
7. Validate the device reports to Plaspy by using the device verification command or checking the device status in the Plaspy platform.

## Example Configuration Commands

The Appello TK102 can be configured using SMS messages. The following public commands are provided in the official configuration example. These commands use the default device password 123456 in the examples. Replace placeholders and credentials as appropriate for your operator and security requirements.

Optional initial factory reset (use only when required):
```
begin123456
```

Set the device time zone to UTC 0:
```
time zone123456 0
```

Set the operator APN (replace [apn] with your mobile operator APN):
```
apn123456 [apn]
```

Set APN username and password if required (replace [apnu] and [apnp] with APN credentials):
```
up123456 [apnu] [apnp]
```

Set the GPRS server to the Plaspy IP and port (public Plaspy values shown):
```
adminip123456 54.85.159.138 8888
```

Switch the device to GPRS mode:
```
gprs123456
```

Check current settings on the device:
```
check123456
```

Notes on placeholders: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and password fields used by some operators. Keep the device password (123456 in these examples) correct for your unit; if your unit uses a different password, substitute it in each command.

## Configuration Notes

- SMS commands are a common public method for configuring the TK102, but manufacturer tools or firmware updates can change command formats; always check the device manual.
- TCP versus UDP selection depends on device firmware; choose the transport required by your installation and the device's network behavior.
- The default password 123456 is used in public examples; if you have changed the password, use the current device password when sending commands.
- APN username and password are optional and only needed for operators that require authentication; leave them out if your operator does not require them.
- After applying settings, use the check123456 command or the Plaspy platform to confirm the unit is reporting to d.plaspy.com on port 8888.

## Why Use Plaspy with This Configuration

Using the Appello TK102 with Plaspy gives organizations a straightforward way to bring legacy and compact GSM/GPRS trackers into a unified tracking platform. By setting the shared Plaspy server and port and verifying connectivity, teams can gain real time visibility, route monitoring, and status reporting within the Plaspy system without device-by-device custom server endpoints.

To learn more about Plaspy and how the platform handles device connections, visit https://www.plaspy.com. Manufacturer setup methods, firmware behavior, and device-specific details can change over time, so verify the latest information with the official manufacturer documentation at http://www.cnjeo.com/.
