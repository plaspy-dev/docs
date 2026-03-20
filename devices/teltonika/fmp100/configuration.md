---
slug: /teltonika/fmp100/configuration
id: fmp100-configuration
sidebar_label: Configuration
title: Teltonika - FMP100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMP100 with Plaspy including server settings and example commands
keywords:
  - Teltonika FMP100 configuration
  - FMP100 setup
  - Teltonika server configuration
  - FMP100 Plaspy setup
  - Plaspy GPS tracker
  - GPS tracker configuration
  - vehicle tracking setup
  - Teltonika configuration guide
  - FMP100 SMS configuration
  - tracker server settings
---

# Teltonika - FMP100 Configuration

This page describes the public configuration context for using the Teltonika FMP100 with Plaspy. It collects the practical server settings, typical prerequisites, and example commands that are publicly available to prepare an FMP100 for reporting location and telemetry into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and the configuration tool you choose (SMS, Teltonika Web tools, or FOTA). Use this guide to apply the public Plaspy values and refer to Teltonika documentation for device specific details.

## Configuration Overview

This configuration process prepares the FMP100 to communicate with Plaspy by applying network settings, validating connectivity, and enabling the device to report positions and sensor events to the shared Plaspy endpoint.

- Apply APN and server parameters so the device can reach Plaspy over the mobile network.
- Select transport (UDP or TCP) and configure the device to send to the Plaspy server endpoint and port.
- Validate connectivity and confirm the tracker appears in Plaspy by checking live positions and event logs.
- Enable any required BLE sensor pairing or local event reporting that your deployment needs.
- Use official Teltonika configuration methods (SMS, Web configuration, or FOTA) to make permanent changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device settings
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Device powered and accessible in the vehicle cigarette lighter socket or other supplied power method.
- Active SIM card with data allowance and correct APN credentials for the mobile operator.
- Access to the Teltonika configuration method you plan to use such as SMS commands, Teltonika Web tools, or FOTA where applicable.
- A Plaspy account or access to the Plaspy instance where the device will be registered and monitored.
- Basic knowledge of the device IMEI or phone number to address SMS commands or register the device in Plaspy.
- Optional BLE accessories paired ahead of time if you will forward sensor telemetry to Plaspy.

## How This Tracker Connects to Plaspy

The FMP100 is configured to report position and event data to the shared Plaspy server endpoint and port. Once the APN and server parameters are set, the device opens a connection to Plaspy and Plaspy detects the protocol automatically so device traffic is ingested into the platform.

- The tracker sends GPS positions and event messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP; Plaspy supports both and will detect the protocol used.
- BLE sensor telemetry and button events are forwarded to Plaspy when paired and enabled.
- Device status and connectivity events are visible in Plaspy for operational monitoring.
- Once reporting is active, Plaspy displays live locations, alerts, and telemetry in the dashboard.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you plan to use (SMS, Teltonika Web tool, or FOTA).
2. Set the server address to d.plaspy.com or alternatively the server IP 54.85.159.138 if your workflow requires an IP.
3. Set the destination port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection.
5. Enter APN credentials for the SIM card so the device can reach the mobile network.
6. Apply or save the configuration and restart the device if the method or firmware requires a reboot.
7. Validate that the device reports to Plaspy by confirming the device appears on the Plaspy dashboard and positions are received.

## Example Configuration Commands

The FMP100 can be configured using an SMS style parameter command as documented in public Teltonika examples. The following public command sets APN credentials and the Plaspy server parameters. Preserve the placeholders when you prepare the actual SMS or configuration string.

- Example SMS configuration command

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command above:
- [apn] is the mobile operator APN name.
- [apnu] is the APN username if required by your operator; leave empty or omit if not required.
- [apnp] is the APN password if required; leave empty or omit if not required.
- The command sets the Plaspy server domain d.plaspy.com and port 8888 as public values for reporting.
- The final parameter 2006 is the transport selection in this example; consult Teltonika documentation for the numeric mapping of transport options on your firmware.
- Send this command via the manufacturer recommended method for your device (SMS to the SIM number in the tracker or via Teltonika configuration tools). Confirm exact send format with Teltonika documentation.

If you use Teltonika Web configuration or FOTA tools, the same server domain d.plaspy.com and port 8888 should be entered in the server or remote host fields, and the transport (UDP or TCP) selected if required.

## Configuration Notes

- Firmware versions and device configurations may change how parameter IDs are named or applied; always verify parameter mappings against the Teltonika product wiki.
- Choosing TCP or UDP can affect delivery characteristics; Plaspy supports both and detects the active protocol automatically.
- Ensure the SIM has an appropriate data plan and that APN credentials are correct before attempting to register the device with Plaspy.
- The public SMS command shown above includes placeholders for APN credentials; replace them with your operator values exactly as required.
- Remember that all devices connecting to Plaspy use the same port 8888, which simplifies server-side configuration on the device.

## Why Use Plaspy with This Configuration

Using the Teltonika FMP100 with Plaspy provides a rapid, low-effort path to real-time vehicle tracking and basic BLE sensor telemetry. The plug and play form factor reduces installation time while the public server settings let you standardize device configuration across a fleet so units can reliably report to Plaspy for mapping, alerts, and operational reporting.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and parameter mappings at the manufacturer site https://www.teltonika-gps.com/ before you deploy.
