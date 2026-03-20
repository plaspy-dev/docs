---
slug: /bofan/pt502/configuration
id: pt502-configuration
sidebar_label: Configuration
title: Bofan - PT502 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT502 tracker showing Plaspy server settings SMS commands and setup considerations
keywords:
  - Bofan PT502 configuration
  - PT502 setup
  - Bofan PT502 Plaspy
  - PT502 GPS tracker configuration
  - PT502 server configuration
  - PT502 SMS setup
  - Bofan tracker setup guide
  - GPS tracker Plaspy configuration
  - fleet tracker PT502 setup
  - PT502 APN configuration
---

# Bofan - PT502 Configuration

This page covers the public configuration context for using the Bofan PT502 GPS tracker with Plaspy. It explains the shared Plaspy server settings you must apply on the tracker, shows the common SMS commands published for the PT502, and outlines the typical setup workflow operators use to get the device reporting to Plaspy. The PT502 supports SMS-based configuration in its public documentation and the manufacturer sample commands reference a default device password of 000000 for initial setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so the platform accepts properly pointed traffic without per-device port mapping. Exact manufacturer-side steps can vary by PT502 firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as practical, public guidance rather than exhaustive device instructions.

## Configuration Overview

The configuration process prepares the PT502 to communicate reliably with Plaspy so location, events, and telemetry appear in the platform. For PT502 devices, this often means setting a device identifier, configuring the cellular APN for data, pointing the device to Plaspy's server endpoint and port, and choosing the transport mode if required.

- Assign the tracker identifier used by Plaspy, commonly a 14 digit ID derived from the IMEI.
- Configure the cellular APN and optional APN username and password so the device can use GPRS/4G data.
- Point the device to the Plaspy server endpoint and port so packets are routed to Plaspy.
- Choose UDP or TCP transport if the device requires a transport selection.
- Set a reporting interval appropriate for your monitoring needs and data plan.
- Validate connectivity so the device appears in Plaspy and sends regular updates.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- All devices in Plaspy use the same port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible PT502 device with its IMEI recorded for identifier configuration.  
- An active SIM card with an appropriate data plan and SMS capability for SMS based configuration.  
- The correct APN details for the SIM operator (APN, optional APN username, optional APN password).  
- Access to the manufacturer configuration method accepted by the PT502 such as SMS commands or vendor software.  
- Knowledge of the device default password if required for commands (public sample uses 000000 as the default).  
- A way to send and receive SMS messages to the device for verification if using SMS provisioning.

## How This Tracker Connects to Plaspy

When configured, the PT502 is set to report its location and event data to Plaspy using the shared Plaspy server endpoint and port. Plaspy then aggregates that incoming data to provide live maps, alerts, history, and operational reports. The device typically sends periodic position updates and event-driven messages that appear in the Plaspy platform once connectivity is confirmed.

- The PT502 is configured to report to d.plaspy.com or directly to 54.85.159.138 at port 8888.  
- Transport can be UDP or TCP depending on device settings and installation preferences.  
- Plaspy automatically detects the tracker protocol so the platform accepts the tracker data without per-device protocol configuration.  
- The tracker sends periodic position reports and event-triggered messages so Plaspy can provide live visibility.  
- Successful configuration means the device appears in Plaspy and updates are received at the expected reporting interval.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PT502 (SMS commands are commonly published by the vendor).  
2. Prepare device identifiers and credentials such as the IMEI and the device password (public samples use 000000 as the default).  
3. Enter d.plaspy.com or 54.85.159.138 as the device server address according to the manufacturer instructions.  
4. Set port 8888 in the device configuration and choose UDP or TCP if the device requires a transport selection.  
5. Configure the cellular APN using the operator APN values so the PT502 can connect over GPRS/4G.  
6. Apply or save the configuration and restart the device if required by the PT502 firmware.  
7. Validate that the device reports to Plaspy by confirming the device appears in the Plaspy platform and sends updates at the configured interval.

## Example Configuration Commands

The PT502 public configuration examples show SMS commands used for device setup. The sample commands use the device password 000000 as the default password in the vendor examples. Preserve the sequence when performing an initial setup.

- Optional initial or factory reset (use only if required):
```text
000000DFT
```

- Set a 14 digit identifier used with the platform. Replace \<14-digit-id> with the last 14 digits of the device IMEI:
```text
000000GID<14-digit-id>
```

- Set the APN for the operator. Replace [apn] with your operator APN. If your APN requires username or password, include [apnu] and [apnp] respectively:
```text
000000APN[apn]
```
If username and password are required, the vendor format may append them like:
```text
000000APN[apn],[apnu],[apnp]
```
(Keep [apnu] and [apnp] as placeholders when not used.)

- Set the GPRS server to the Plaspy server IP and port:
```text
000000SVR54.85.159.138,8888
```

- Set the update interval to 60 seconds (example command to set 1 minute reporting):
```text
000000GTI60
```

Notes on these commands:
- The reset command 000000DFT is optional and typically used during initial provisioning or to restore factory defaults when needed.  
- The GID command expects a 14 digit identifier; the recommended value is the last 14 digits of the IMEI.  
- Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values when sending commands.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions can change command syntax and behavior; verify command formats with the official PT502 documentation.  
- SMS based setup is a common public method for the PT502 but vendor software or configuration tools may also be available; use the official method recommended by the installer or vendor.  
- Choose UDP or TCP based on installation needs and network behavior; Plaspy accepts both and automatically detects the protocol.  
- Plaspy uses the same port for all devices so always set port 8888 when pointing a device to Plaspy.  
- Keep the device password secure and change defaults where supported after initial provisioning.

## Why Use Plaspy with This Configuration

Using the PT502 with Plaspy provides a straightforward path to fleet visibility and event monitoring. Pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 and configuring the APN and identifier will enable the device to deliver location updates and event data to Plaspy, where operators can view live maps, alerts, and historical reports.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current PT502 device commands, firmware notes, and manufacturer guidance verify details on the official Bofan website https://www.bofancloud.com/ as device specific configuration methods and firmware behavior can change over time.
