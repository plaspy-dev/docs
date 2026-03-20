---
slug: /teltonika/tat140/configuration
id: tat140-configuration
sidebar_label: Configuration
title: Teltonika - TAT140 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika TAT140 when used with Plaspy including server settings example and SMS command guidance
keywords:
  - teltonika tat140 configuration
  - teltonika tat140 setup
  - tat140 plaspy configuration
  - teltonika asset tracker setup
  - tat140 server configuration
  - teltonika gps tracker configuration
  - plaspy device configuration
  - asset tracking platform setup
  - teltonika sms configuration
  - battery powered gps tracker setup
---

# Teltonika - TAT140 Configuration

This page covers the public configuration context for using the Teltonika TAT140 with the Plaspy platform. It describes the shared Plaspy server settings you will point the tracker at, provides a practical example command from the TAT140 public configuration content, and explains the common steps to prepare the device for reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools. Use the guidance below together with Teltonika documentation or configuration tools to ensure correct device behavior.

## Configuration Overview

The goal of configuration is to prepare the TAT140 so it can reliably send position and status data to Plaspy for tracking, telemetry, and alerts. The public example command included below shows a typical batch parameter update that sets APN values plus the Plaspy server endpoint and port.

- Point the device to the Plaspy server endpoint so data is routed to your Plaspy account.
- Provide correct APN and authentication placeholders so the device can use the cellular data connection.
- Choose a transport (UDP or TCP) where required and save the selection in device settings.
- Verify connectivity and that reports arrive in Plaspy to confirm visibility and telemetry.
- Optionally use SMS or manufacturer tools to apply configuration to devices in the field.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint information to use when configuring the TAT140. Plaspy uses the same port for all supported devices and performs automatic protocol detection.

## Typical Requirements Before Setup

- Access to the device and any required manufacturer configuration method or software such as Teltonika SMS commands or a Teltonika configuration tool.
- A charged battery or power source and knowledge of the device installation location.
- An active SIM card and cellular data plan compatible with LTE Cat 1 and 2G fallback where required.
- APN settings and any required APN username and password for the mobile operator (placeholders are used in the example command).
- Basic knowledge of choosing UDP or TCP if the device requires an explicit transport selection.
- Access to manufacturer documentation or FOTA Web for firmware and configuration management as needed.

## How This Tracker Connects to Plaspy

The TAT140 is configured to send periodic location and status messages to the shared Plaspy server endpoint and port. Once the server address and transport are set, the device will begin reporting according to its configured reporting intervals.

- Device sends position and telemetry messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives incoming connections on the same port for all supported devices and performs automatic protocol detection.
- Periodic reporting frequency determines how often location updates and battery or status messages are transmitted.
- Successful configuration enables visibility in Plaspy dashboards, geofence monitoring, and alerting based on incoming events.
- If configuration is applied by SMS, the device will accept the parameter batch and start reporting without a separate software client.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TAT140 (SMS command, Teltonika configuration tool, or FOTA Web as applicable).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the server port to 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Enter APN details and any APN username or password placeholders required by your SIM operator.
6. Apply or save the configuration and, if required, restart the device to activate new settings.
7. Validate that the device reports to Plaspy by confirming incoming messages or visibility in the Plaspy platform.

If your device supports SMS-based configuration, you can apply the parameter batch through the device SMS channel as shown in the example below.

## Example Configuration Commands

The TAT140 public configuration content includes a parameter batch command that can be used to set APN values and the Plaspy server endpoint. Preserve the placeholders and replace them with your operator APN values before sending.

- Replace the placeholders:
  - {{apn}} = your SIM operator APN
  - {{apnu}} = APN username if required
  - {{apnp}} = APN password if required

Example SMS batch command:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the example command:
- This command updates basic parameters including APN fields and the Plaspy server domain and port.
- The parameter keys are presented as provided in public configuration content. Consult Teltonika documentation for exact parameter key meanings and numeric transport values.
- Send this command via SMS to the device or use the recommended Teltonika configuration tool if available.

## Configuration Notes

- Firmware versions and hardware revisions can change parameter names and available configuration channels; always confirm parameter keys with the latest Teltonika documentation.
- If the device requires a numeric transport value, consult Teltonika documentation to map the numeric value to UDP or TCP before applying settings.
- SMS-based configuration is a common public method for Teltonika devices; using the manufacturer configuration tool or FOTA Web may provide additional validation and remote management features.
- Plaspy uses the same port for all devices and automatically detects the protocol, so the primary items to set are the server address, port, APN, and transport selection if required.
- Validate device connectivity after configuration and monitor initial reports in Plaspy to confirm proper integration.

## Why Use Plaspy with This Configuration

Using the Teltonika TAT140 with Plaspy provides a practical solution for long‑term, unattended asset tracking where battery life, ruggedness, and reliable cellular coverage are priorities. Configuring the device to point at the shared Plaspy server endpoint ensures consistent delivery of position and telemetry data for monitoring, geofence alerts, and historical reporting.

To learn more about Plaspy and how it supports fleet and asset tracking workflows visit https://www.plaspy.com. For the latest device specific configuration details, parameter definitions, and firmware behavior verify information with the manufacturer at https://www.teltonika-gps.com/
