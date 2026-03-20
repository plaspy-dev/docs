---
slug: /sanav/ct_24/configuration
id: ct_24-configuration
sidebar_label: Configuration
title: Sanav - CT-24 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sanav CT-24 showing Plaspy server settings and SMS setup steps
keywords:
  - Sanav CT-24 configuration
  - Sanav CT-24 setup
  - Sanav CT-24 Plaspy
  - CT-24 GPS configuration
  - Sanav tracker configuration
  - CT-24 server configuration
  - CT-24 SMS setup
  - vehicle tracking CT-24
  - Plaspy tracker setup
  - GPS tracker CT-24
---

# Sanav - CT-24 Configuration

This page documents the public configuration context for using the Sanav CT-24 tracker with Plaspy. It gathers the practical server settings, example SMS commands, and workflow guidance needed to point a CT-24 at Plaspy so the device can transmit location and basic device data to the platform. The guidance below is based on the CT-24 description and the publicly available SMS configuration commands.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, which simplifies integration. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this page as a practical reference and consult the official Sanav documentation for device-specific details.

## Configuration Overview

The CT-24 can be prepared to communicate with Plaspy using the device configuration methods supported by Sanav. The goal of configuration is to ensure the tracker has correct mobile data settings, the Plaspy server endpoint, and an appropriate reporting profile so the device appears and reports reliably in the Plaspy platform.

- Configure the mobile operator APN so the CT-24 can open a data session for GPRS.
- Point the device GPRS server to Plaspy at the shared server endpoint.
- Select the transport (UDP or TCP) on port 8888 so data reaches Plaspy.
- Set reporting intervals and routing so the tracker sends periodic updates to Plaspy.
- Validate connectivity and confirm the device is visible in Plaspy after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the CT-24. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged CT-24 and access to its SMS configuration method or manufacturer configuration tool.
- An active SIM card with mobile data enabled and the correct APN information for the operator.
- Knowledge of the device password or access credentials used by the CT-24 (the public sample uses the default password 0000).
- Ability to send SMS commands to the device if using SMS based configuration and to receive confirmation SMS responses.
- Access to the official Sanav documentation or support resources to confirm command formats and firmware-specific behaviors.

## How This Tracker Connects to Plaspy

The CT-24 is configured to report location and device data to Plaspy by directing its GPRS data route to the Plaspy server endpoint and port. Once the tracker has mobile connectivity and the server settings, Plaspy will accept incoming connections and automatically identify the device protocol so data can be processed and shown in the platform.

- The tracker sends location and periodic updates to the shared Plaspy server endpoint.
- Data is sent over either UDP or TCP as configured, on port 8888.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct parser.
- Status updates and device events become visible in the Plaspy platform once reporting begins.
- Regular heartbeat or position intervals allow operational monitoring and alerting inside Plaspy.

## Common Configuration Workflow

1. Access the official Sanav configuration method for the CT-24, typically SMS commands or the manufacturer tool, and confirm the command format for your firmware.
2. Configure the mobile APN for the installed SIM using the APN placeholders provided by your operator.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection for GPRS data.
5. Apply or save the configuration on the device by sending the appropriate command or using the manufacturer tool.
6. Restart the CT-24 if required by the device or firmware to apply network or server changes.
7. Validate that the device reports to Plaspy by checking for incoming data in the Plaspy platform and confirming location updates.

## Example Configuration Commands

The CT-24 supports SMS based configuration. The following example commands are taken from public device configuration guidance. Replace placeholders and the username marker as required by your device and firmware. The sample device password shown here is 0000 which is the default used in the public examples.

- Factory reset (optional or initial setup)
  
```
#username,0000,9*
```

- Set the operator APN. Replace the placeholders with your operator values:
  - [apn] is the APN name
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required

```
#username,0000,3,[apn],[apnu],[apnp]*
```

- Set the GPRS server to Plaspy using the public Plaspy server IP and port

```
#username,0000,18,54.85.159.138:8888*
```

- Set the route for data transmission (example route command from public guidance)

```
#username,0000,14,9*
```

- Set the update interval to 60 seconds (example reporting interval command)

```
#username,0000,6,60,9999*
```

Notes for the commands
- Keep the command order when following manufacturer guidance if they recommend a specific sequence.
- Replace #username with the device username or command prefix required by your CT-24 firmware if applicable.
- Preserve the placeholders [apn], [apnu], and [apnp] and substitute them with your operator values.
- The GPRS server entry points the tracker to Plaspy using the server IP and port 54.85.159.138:8888 which maps to d.plaspy.com.

## Configuration Notes

- Firmware differences and regional firmware variants can change exact SMS command formats or available parameters. Verify with Sanav documentation for your device firmware.
- SMS based setup is supported by the publicly available commands shown above, but some installations prefer the manufacturer tool or provisioning service.
- Choose UDP or TCP based on operator performance and device behavior; both transports are supported by Plaspy on port 8888.
- Plaspy uses the same port for all supported trackers and will automatically detect the protocol used by the CT-24.
- Always confirm APN credentials and SIM data allowance before applying GPRS server settings to avoid connectivity issues.

## Why Use Plaspy with This Configuration

Pointing a Sanav CT-24 to Plaspy provides a practical way to centralize location reporting, device status, and basic event visibility for fleet, asset, or personal tracking scenarios. Using a single shared server endpoint and port simplifies large deployments and helps reduce per-device configuration overhead while allowing the platform to identify and parse the CT-24 protocol automatically.

To learn more about Plaspy and how it works with devices like the Sanav CT-24 visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and setup details consult the Sanav manufacturer website at http://es.sanav.com/ since manufacturer specifications and setup steps can change over time.
