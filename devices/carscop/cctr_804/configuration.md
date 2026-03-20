---
slug: /carscop/cctr_804/configuration
id: cctr_804-configuration
sidebar_label: Configuration
title: Carscop - CCTR-804 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Carscop CCTR 804 to connect the tracker to Plaspy with server settings and example SMS commands
keywords:
  - Carscop CCTR 804 configuration
  - Carscop setup for Plaspy
  - CCTR 804 server configuration
  - CCTR 804 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking configuration
  - GPS tracker SMS commands
  - GPRS server setup
  - fleet tracking integration
  - tracker protocol detection
---

# Carscop - CCTR-804 Configuration

This page documents the public configuration context for using the Carscop CCTR-804 tracker with Plaspy. It collects the Plaspy server settings you need to point the device to, explains the typical setup workflow, and includes the publicly provided SMS commands that are commonly used to prepare this model for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this page as practical guidance and confirm any model specific details with the official Carscop documentation.

## Configuration Overview

This configuration process prepares the CCTR-804 to send location and telemetry packets to Plaspy so the device is visible and manageable inside the Plaspy platform. The public commands and steps below show a straightforward SMS based setup example that many installers use to enable GPRS reporting.

- Point the tracker to the Plaspy server endpoint and port so location packets route into the platform.
- Configure APN and optional APN credentials so the device can establish GPRS data connectivity.
- Keep the tracker online and set timezone and reporting behavior for correct timestamps and consistent uploads.
- Validate connectivity and reporting so the device appears in Plaspy and begins delivering position and event data.
- Use the included sample SMS commands to perform factory reset, timezone, APN, server endpoint, and online keepalive settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed CCTR-804 with access to the device SMS interface or installer configuration tool.  
- An active SIM card with data enabled and SMS capability inserted in the tracker, and APN details from the mobile operator.  
- Knowledge of the device SMS command password. The publicly shown default password in sample commands is 123456. Confirm if your unit uses a different password.  
- Basic installer tools such as a phone able to send SMS to the tracker or the official Carscop configuration utility where available.  
- A plan to validate reporting in Plaspy after configuration so you can confirm the device is connected and sending data.

## How This Tracker Connects to Plaspy

The CCTR-804 reports position and telemetry over the cellular network using its GPRS protocol to send packets to Plaspy. Once configured with the correct APN and server endpoint, the tracker uploads data to the shared Plaspy endpoint where the platform parses and displays device activity.

- Device sends GPS and telemetry packets to the configured GPRS server endpoint at 54.85.159.138 and port 8888.  
- Plaspy accepts TCP or UDP transport and automatically detects the tracker protocol used by the device.  
- The tracker can be configured to remain online so periodic uploads and event‑driven reports arrive at Plaspy for live tracking.  
- Plaspy processes incoming packets for real time location, alerts, and historical route playback.  
- Proper APN and GPRS configuration is required so the unit can establish a data session and deliver packets to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Carscop configuration method for your unit, typically SMS commands or the manufacturer configuration tool.  
2. Configure the device APN settings using the mobile operator values so the tracker can use GPRS.  
3. Enter the Plaspy server as either the server domain or IP address, using d.plaspy.com or 54.85.159.138.  
4. Set the server port to 8888. Note that Plaspy uses the same port for all devices.  
5. Choose UDP or TCP transport on the device if it requires explicit selection.  
6. Apply or save the settings and restart the device if required by the tracker firmware.  
7. Validate that the tracker reports into Plaspy and that position timestamps and telemetry appear correctly.

## Example Configuration Commands

The CCTR-804 supports SMS based setup. The following public example commands show a typical sequence. The sample setup uses a default device password of 123456 as shown in the public commands. Replace placeholders such as [apn], [apnu], and [apnp] with your operator values.

- Optional initial factory reset (use only if you need to restore defaults):
```text
RESET*123456
```

- Set the device time zone to UTC 0:
```text
TIMEZONE*123456*+00
```

- Set the mobile operator APN (replace [apn] with your operator APN):
```text
APN*123456*[apn]
```

- Set the APN username and password if required by the operator (replace [apnu] and [apnp] with credentials):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Set the GPRS server to Plaspy using the public server IP and port:
```text
IP*123456*54.85.159.138,8888
```

- Configure the tracker to keep online and report periodically:
```text
KEEPONLINE*123456
```

Notes on placeholders and alternatives:
- [apn] is the carrier APN string.  
- [apnu] and [apnp] are the APN username and password when required by the mobile operator.  
- The example uses the server IP 54.85.159.138 and port 8888 as shown in the public commands. Some firmware versions accept a domain name instead of an IP; consult Carscop documentation if you prefer to use d.plaspy.com.

## Configuration Notes

- Firmware differences and regional hardware variants can change available SMS commands or command syntax; check the device manual for firmware specific details.  
- SMS based configuration is a common public method for this model but manufacturer tools or OTA provisioning may also be available depending on the vendor.  
- Choose UDP or TCP transport according to installer preference and device firmware support; Plaspy accepts both and automatically detects protocol.  
- Retain awareness that the sample default password shown in the public commands is 123456; confirm your unit password before sending commands.  
- After configuration, always validate reporting in Plaspy to confirm successful connectivity and correct timestamps.

## Why Use Plaspy with This Configuration

Using the CCTR-804 with Plaspy gives fleet operators practical real time visibility, configurable reporting, and centralized event handling. When the device is pointed at the Plaspy server endpoint and port and the APN is set correctly, Plaspy ingests location and telemetry for live mapping, historical playback, and alerting workflows useful to dispatch, security, and operations teams.

To learn more about Plaspy and how it can be used with Carscop trackers visit https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and manufacturer details verify current information on the Carscop site http://www.carscop.com/ before deploying.
