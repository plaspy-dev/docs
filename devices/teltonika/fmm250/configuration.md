---
slug: /teltonika/fmm250/configuration
id: fmm250-configuration
sidebar_label: Configuration
title: Teltonika - FMM250 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Teltonika FMM250 for Plaspy with server settings and example commands for quick setup
keywords:
  - Teltonika FMM250 configuration
  - Teltonika FMM250 setup
  - FMM250 Plaspy configuration
  - FMM250 server setup
  - Teltonika GPS tracker configuration
  - Plaspy device setup
  - vehicle GPS tracker configuration
  - fleet tracker setup
  - Teltonika CAN telemetry configuration
  - GPS tracker server configuration
---

# Teltonika - FMM250 Configuration

This page describes the public configuration context for using the Teltonika FMM250 with Plaspy. It focuses on the server settings and practical steps needed to point an FMM250 tracker at Plaspy so the device can report location and CAN telemetry into the Plaspy platform. Use this information together with Teltonika product documentation and the device configuration tools you have available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools or SMS commands you choose to use. Where available this page includes an example setparam command that illustrates a common public configuration approach for Teltonika devices.

## Configuration Overview

Preparing the FMM250 for Plaspy integration means configuring network access, setting the Plaspy server endpoint and port, and validating that telemetry and CAN data are successfully received by the platform. The example command below shows a compact way to set APN and server fields commonly used in Teltonika SMS or batch commands.

- Set the tracker to report to Plaspy server domain or IP so the device can reach Plaspy backend
- Provide correct APN and SIM credentials so the tracker can establish cellular data
- Select transport (UDP or TCP) and the shared Plaspy port used by all devices
- Apply and save settings, then verify that the FMM250 appears in the Plaspy platform
- Validate CAN and location streams so vehicle telemetry populates Plaspy dashboards

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are supported; the device may be configured to use either transport on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for reporting

These values are the public endpoint settings you should use when configuring the FMM250 to report directly to Plaspy.

## Typical Requirements Before Setup

- A powered and accessible FMM250 installed or temporarily bench powered for configuration  
- A cellular SIM with a data plan and APN credentials that match the device variant and regional carrier support (LTE Cat M1, NB IoT, or 2G fallback where applicable)  
- Access to the Teltonika configuration method you prefer (SMS commands, Teltonika configuration tools, or remote management)  
- Device IMEI or serial so you can identify the tracker in Plaspy after it starts reporting  
- Up to date firmware where possible and knowledge of the firmware version in case parameter mapping differs  
- Network coverage for the chosen cellular technology and confirmation that the APN allows outbound connections to the Plaspy server

## How This Tracker Connects to Plaspy

The FMM250 sends cellular location and CAN-derived telemetry to Plaspy over the configured transport and port. Once configured to point at the shared Plaspy endpoint, the device transmits periodic reports and event-driven messages that Plaspy ingests and maps into fleet dashboards and telemetry streams.

- The tracker reports GPS and CAN telemetry to the Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888  
- Device messages are sent using either UDP or TCP depending on the transport chosen in the tracker settings  
- Plaspy automatically detects the tracker protocol so a correct server and port are the primary requirements for connectivity  
- Incoming CAN parameters and location updates are processed by Plaspy for live monitoring and history charts  
- Validation of device reporting in Plaspy confirms both connectivity and correct mapping of telemetry

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer: SMS, Teltonika configurator, or remote management tool.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.  
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP on the device if the configuration requires explicit transport selection.  
5. Set or verify APN and SIM credentials so the device can get mobile data access.  
6. Apply or save the configuration and restart the device if required by the Teltonika tool or SMS method.  
7. Validate that the FMM250 reports successfully to Plaspy and appears in your platform view with location and CAN telemetry.

If you use SMS-based configuration, the next section contains a public example command that is commonly used with Teltonika devices.

## Example Configuration Commands

The public Teltonika example command below illustrates setting APN credentials and pointing the device to Plaspy. This command is commonly delivered via SMS or the Teltonika configuration channel when supported by the device and firmware.

- Example setparam command (preserve placeholders when replacing with actual values):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields in the example command:
- {{apn}} is the cellular APN provided by your mobile operator  
- {{apnu}} is the APN username if required by the operator; leave blank if not used  
- {{apnp}} is the APN password if required by the operator; leave blank if not used  
- 2004 sets the server domain to d.plaspy.com and 2005 sets the port to 8888 in this example  
- 2006:1 is included in the example sequence; verify parameter mappings for your firmware in Teltonika documentation as the numeric parameter meanings can vary by firmware and model  
- Use the Teltonika SMS or configuration tool safe sending procedures and confirm the device accepts the command

Always verify exact parameter numbering and command syntax against Teltonika official references for your device firmware version.

## Configuration Notes

- Teltonika parameter numbers and the exact setparam syntax can differ by firmware version; confirm the mapping for 2001 through 2006 on your installed firmware.  
- Choose UDP or TCP based on your installation requirements; Plaspy accepts both and automatically detects protocol.  
- SMS configuration is a common public method for Teltonika trackers but may be limited by regional carrier SMS policies or by device firmware settings.  
- Preserve APN placeholders and replace them with operator-specific values when sending commands.  
- After applying settings, a device restart may be required for changes to take effect; consult Teltonika documentation if restart is necessary.

## Why Use Plaspy with This Configuration

Using the Teltonika FMM250 with Plaspy brings rugged hardware and deep vehicle telemetry into a single fleet management workflow. The FMM250’s CAN data capabilities combined with Plaspy’s ingestion of location and telemetry make it practical to monitor vehicle health, track assets in real time, and create alerts or analytics based on CAN-sourced parameters and location events.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and parameter mappings consult Teltonika documentation at https://www.teltonika-gps.com/ to verify syntax and parameter definitions for your FMM250 firmware.
