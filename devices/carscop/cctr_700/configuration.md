---
slug: /carscop/cctr_700/configuration
id: cctr_700-configuration
sidebar_label: Configuration
title: Carscop - CCTR-700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Carscop CCTR-700 to connect with Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - Carscop CCTR-700 configuration
  - Carscop CCTR-700 setup
  - Carscop CCTR-700 server configuration
  - Carscop GPS tracker setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker SMS commands
  - GPRS tracker configuration
  - vehicle tracking platform setup
  - tracker integration guide
---

# Carscop - CCTR-700 Configuration

This page describes the public configuration context for using the Carscop CCTR-700 GPS tracker with the Plaspy platform. It collects the practical, nonproprietary setup information needed to point a CCTR-700 to Plaspy and explains how the device can communicate with Plaspy using SMS or GPRS based commands where supported.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands and workflows here as a practical public reference and verify device specifics with the manufacturer documentation when needed.

## Configuration Overview

The configuration process prepares the CCTR-700 to send location and status data to Plaspy so the device becomes visible and manageable on the platform. For this tracker the setup is typically done through SMS GPRS commands that set APN, server, and behaviour so the device reports to Plaspy's shared endpoint.

- Configure the device APN and optional APN credentials so GPRS data can be transmitted.
- Point the tracker to Plaspy using the shared server endpoint and port.
- Choose the transport mode (UDP or TCP) if the device requires a selection.
- Validate connectivity and confirm that the unit reports to Plaspy.
- Optionally use an initial factory reset or timezone setting to standardize device behavior before deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible CCTR-700 device with the ability to receive SMS commands or accept GPRS configuration as provided by the manufacturer.
- A valid SIM card inserted with a data plan and SMS capability for GPRS registration and command delivery where required.
- The device default password if required for SMS commands; publicly available sample commands use the default password 123456.
- Access to the official Carscop configuration method or documentation for the specific firmware revision.
- A Plaspy account or platform access to add and verify the device once it begins reporting.
- Confirmation of the correct APN values from the mobile operator for the SIM card in use.

## How This Tracker Connects to Plaspy

The CCTR-700 can send location reports and alarms to Plaspy either via GPRS (IP) or by delivering location via SMS which can include map links depending on device configuration. For GPRS reporting, the device is configured with Plaspy's server endpoint so telemetry is delivered directly into the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Location reports and event messages are sent over GPRS to the configured server IP or domain.
- SMS commands can be used to set APN, server IP, and keepalive behaviour before data sessions begin.
- Once configured, the device becomes visible in Plaspy and can be monitored for location and status updates.
- Plaspy detects the device protocol automatically so explicit protocol selection is only needed if the device requires a transport preference.

## Common Configuration Workflow

1. Access the official Carscop configuration method for your device and firmware, typically SMS commands or a vendor configuration tool.
2. Set the APN for the SIM operator using the correct APN string for your mobile network.
3. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 and set the server port to 8888.
4. Choose UDP or TCP if the device requires a transport selection and the installer prefers one.
5. Apply or save the configuration on the device, for SMS based setups this means sending the required SMS commands.
6. Restart the device if required by the manufacturer or after significant changes like server or APN updates.
7. Validate that the device reports to Plaspy by checking the device status and location on the Plaspy platform.

## Example Configuration Commands

The CCTR-700 supports SMS based configuration. The following public SMS command examples are provided in the manufacturer's public configuration HTML. The device default password used in these examples is 123456. Keep placeholders as shown and replace them with operator specific values when required.

- Restore factory settings (optional initial step)
```text
RESET*123456
```

- Set the time zone to UTC 0
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace [apn] with your operator APN)
```text
APN*123456*[apn]
```

- Set the APN username and password when required (replace [apnu] and [apnp] with your APN credentials)
```text
USERNAME*123456*[apnu]*[apnp]
```

- Set the GPRS server to Plaspy using the public server IP and port
```text
IP*123456*54.85.159.138,8888
```
  - Note: you can replace the IP with the domain d.plaspy.com in vendor tools or commands that accept a hostname instead of an IP.

- Keep the tracker online (enable keepalive behavior)
```text
KEEPONLINE*123456
```

Placeholders explained:
- [apn] — the APN string provided by the mobile operator for data connections.
- [apnu] — APN username if the operator requires one.
- [apnp] — APN password if the operator requires one.

Send these commands as SMS messages to the device number. If a reset command is used, label it as optional and use it only when initializing or troubleshooting.

## Configuration Notes

- SMS based setup is commonly supported by the CCTR-700; follow the exact SMS format required by your device firmware.
- Firmware versions and vendor tools can change command formats or available features; always confirm with the latest Carscop documentation.
- When given a choice, UDP tends to be used for lower overhead telemetry while TCP can be more reliable for delivery; choose based on your network and operational preferences.
- Using the domain d.plaspy.com instead of the raw IP can simplify future changes if Plaspy updates endpoints; the device supports either where the command or tool accepts hostnames.
- Verify APN and operator credentials before configuring the server to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Configuring the Carscop CCTR-700 to report to Plaspy provides a straightforward way to centralize location, event, and device status monitoring across a fleet or set of personal trackers. With the shared Plaspy server settings and automatic protocol detection, you can apply a consistent configuration approach to supported devices and reduce per-unit variation during deployment.

To learn more about Plaspy and how devices like the Carscop CCTR-700 integrate with the platform visit https://www.plaspy.com. For the most current device specific commands and firmware behavior verify details with the manufacturer at http://www.carscop.com/ as specifications and setup methods can change over time.
