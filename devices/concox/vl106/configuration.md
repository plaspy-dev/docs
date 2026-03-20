---
slug: /concox/vl106/configuration
id: vl106-configuration
sidebar_label: Configuration
title: Concox - VL106 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox VL106 GPS tracker with Plaspy compatibility and practical server and SMS setup steps
keywords:
  - Concox VL106 configuration
  - Concox VL106 setup
  - Concox VL106 server configuration
  - VL106 Plaspy
  - VL106 GPS tracker configuration
  - Concox tracker setup
  - Plaspy GPS server settings
  - Concox VL106 SMS commands
  - vehicle tracker configuration
  - fleet tracker VL106
---

# Concox - VL106 Configuration

This page documents the public configuration context for using the Concox VL106 tracker with the Plaspy platform. It focuses on the practical, publicly available steps and server settings you will use to direct the VL106 to report to Plaspy and to validate basic connectivity. The content here summarizes manufacturer SMS commands that are publicly published alongside the core Plaspy server settings required for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact device-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use the guidance below to prepare the VL106 for Plaspy, and always confirm device-specific details with the manufacturer documentation when needed.

## Configuration Overview

The goal of this configuration is to prepare a VL106 to communicate reliably with Plaspy so the device appears in the platform for real time tracking and event reporting. The process configures network access, points the device at Plaspy's server endpoint, and sets reporting behavior.

- Configure the device APN and GPRS settings so the VL106 has cellular data access.
- Point the tracker to the Plaspy server using the provided domain or IP address and the common Plaspy port.
- Choose transport (UDP or TCP) if required and enable data reporting with a suitable interval.
- Enable GPRS operation and verify the tracker can reach the Plaspy endpoint.
- Validate reporting from the device to Plaspy and confirm events such as ignition or SOS are visible.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the VL106. Plaspy requires the same port across supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so devices can report using their supported protocol to the shared port

## Typical Requirements Before Setup

- A valid, active SIM card with data enabled and SMS capability inserted in the VL106.
- Access to the device for SMS configuration or the manufacturer's configuration tool as provided in vendor documentation.
- Correct APN details for the cellular operator for data connectivity.
- Power supply or vehicle connection so the device has stable power for configuration and testing.
- Knowledge of the device IMEI and any installer passwords if required by the vendor to perform setup.
- A Plaspy account or contact with your Plaspy administrator to confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

When configured, the VL106 sends GNSS position, motion, and event telemetry to the Plaspy server endpoint and port. Plaspy ingests that data for real time mapping, event workflows, and historical replay so operators can monitor vehicles and respond to alerts.

- The tracker reports to the shared Plaspy server endpoint using d.plaspy.com or the alternative IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device setting; Plaspy detects the protocol automatically.
- Location, IMU and event telemetry such as ACC/ignition and SOS are transmitted to Plaspy for live updates.
- The device can use configured reporting intervals to control update frequency so data appears in Plaspy in near real time.
- Onboard storage preserves event data during temporary connectivity loss and the VL106 uploads retained records when the connection is restored.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL106, typically the vendor SMS command set or a Concox configuration tool as documented by the manufacturer.
2. Ensure the device has a working SIM with the correct APN and that SMS/data are available.
3. Enter the Plaspy server address by setting either d.plaspy.com or 54.85.159.138 as the SERVER parameter.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure reporting interval (for example 60 seconds) and enable GPRS reporting modes required by the device.
6. Apply or save the configuration and restart the device if required by the vendor procedure.
7. Validate that the VL106 is reporting to Plaspy by checking device status and incoming positions in the Plaspy platform.

## Example Configuration Commands

The VL106 can be configured using SMS commands. The following commands are the public commands used to set up the device for Plaspy. Preserve the placeholders when replacing with your carrier values.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] with your operator APN; include [apnu] and [apnp] if your operator requires username and password):
```text
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/ if }}#
```
(When using the placeholder syntax above, replace [apn] with the operator APN. If your operator requires an APN username or password, use the additional placeholders [apnu] and [apnp].)

- Set the GPRS server to the Plaspy domain using port 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively, set the GPRS server to the Plaspy IP using port 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to report every 60 seconds (two common formats are shown; use the format supported by your firmware):
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode:
```text
GPRSON,1#
```

- Verify current GPRS parameter settings:
```text
GPRSSET#
```

Use these commands in the order shown when following a standard setup flow. Replace placeholders and adjust values to match your network operator requirements and installation needs.

## Configuration Notes

- SMS based configuration is provided above because the VL106 supports SMS command configuration; manufacturer tools may also be available and can provide a GUI alternative.
- Different firmware versions or hardware revisions may accept slightly different command syntax or command parameters; confirm the exact command set with Concox documentation for your device firmware.
- Choose UDP or TCP based on your installation needs; Plaspy will accept either on port 8888 and will detect the protocol automatically.
- Keep APN placeholders [apn], [apnu], and [apnp] intact when preparing commands and replace them with your operator credentials as required.
- Plaspy uses the same port 8888 for all supported devices so server and port configuration is consistent across device types.

## Why Use Plaspy with This Configuration

Using the VL106 with Plaspy gives operators consistent visibility into vehicle location, motion events and device status using a single shared server endpoint. The VL106's INS aided navigation and onboard IMU complement Plaspy's real time mapping and event workflows to support fleet operations, safety monitoring and forensic analysis after incidents.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes and installation guidance always verify current information on the manufacturer site https://www.iconcox.com/ as vendor specifications and setup methods can change over time.
