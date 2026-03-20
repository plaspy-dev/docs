---
slug: /gotop/gv6/configuration
id: gv6-configuration
sidebar_label: Configuration
title: GOTOP - GV6 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP GV6 tracker showing server settings and setup steps to connect the device to Plaspy
keywords:
  - GOTOP GV6 configuration
  - GOTOP GV6 setup
  - GV6 Plaspy configuration
  - GV6 server configuration
  - GOTOP GPS tracker setup
  - GV6 tracking platform setup
  - GOTOP asset tracker configuration
  - Plaspy tracker setup
  - GV6 fleet tracking configuration
  - GOTOP GV6 integration
---

# GOTOP - GV6 Configuration

This page documents the public configuration context for using the GOTOP GV6 4G Asset Tracker with the Plaspy platform. It focuses on the practical server settings and workflow needed to point a GV6 device at Plaspy so the device can deliver location and event data into the Plaspy cloud for monitoring and reporting.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by GV6 firmware version, hardware revision, installation type, and the configuration method you use (SMS, local software, or cloud provisioning). Refer to the manufacturer documentation for device-specific details while using the server settings and workflow below to integrate with Plaspy.

## Configuration Overview

This configuration process prepares the GV6 to communicate reliably with the Plaspy back end so location, alarms, and telemetry appear in your Plaspy account. The steps concentrate on setting the correct server endpoint, choosing the transport, and validating connectivity from the asset to the platform.

- Point the GV6 to the Plaspy server domain or IP so it routes telemetry to Plaspy.
- Set the device port to the Plaspy port used for all devices to ensure consistent ingestion.
- Select UDP or TCP transport on the GV6 if the device requires a transport selection.
- Apply and save the configuration and restart the tracker when required by the device.
- Validate in Plaspy that the GV6 has connected and is reporting location and events.
- Keep manufacturer firmware and configuration steps in sync with the GV6 user guide.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that all devices in Plaspy use the same port, so the GV6 should also be configured to use port 8888 when reporting to Plaspy.

## Typical Requirements Before Setup

- A GV6 unit with a charged battery or external power connected.
- An active cellular SIM with data enabled and correct APN configured for the installed mobile operator.
- Access to the official GOTOP configuration method for the GV6 such as SMS commands, manufacturer provisioning tool, or cloud configuration portal.
- The GV6 device IMEI or unique identifier to match the device with your Plaspy fleet records.
- Manufacturer documentation and any GV6 firmware notes for the variant you are deploying.
- Tools to restart or power cycle the device after applying settings if required.

## How This Tracker Connects to Plaspy

The GV6 sends position, telemetry, and alarm events over the cellular network to the Plaspy collection endpoint. When configured to target Plaspy using the domain or IP and the correct port, inbound data is automatically handled by Plaspy which detects the tracker protocol and ingests events for maps, alerts, and reporting.

- Configure the GV6 to report to d.plaspy.com or to 54.85.159.138 depending on your configuration method preference.
- Ensure the device port is set to 8888 because Plaspy uses the same port for all supported devices.
- Choose UDP or TCP transport if the GV6 requires a transport option; Plaspy accepts both.
- After connection, Plaspy will automatically detect the GV6 protocol and begin processing incoming messages.
- Alarms such as removal/drop and anti-fake base station alerts are forwarded into Plaspy as events for immediate notification and logging.

## Common Configuration Workflow

1. Access the official GOTOP GV6 configuration method or software as provided by the manufacturer.
2. In the server address field enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 which is the shared port Plaspy uses for all devices.
4. If the device requires a transport selection, choose UDP or TCP and save the selection.
5. Apply or save the configuration changes using the GV6 configuration tool or SMS commands.
6. Restart or power cycle the GV6 if the device or firmware requires a reboot for settings to take effect.
7. Validate that the GV6 reports to Plaspy by checking device activity in the Plaspy platform and confirming location or event messages are received.

## Example Configuration Commands

The GV6 supports remote parameter configuration via SMS and cloud platform provisioning according to the manufacturer documentation. Exact SMS command syntax and tool commands vary by firmware and region, so follow the official GOTOP command reference for your GV6 variant.

If you use SMS for configuration, typical public guidance looks like this in concept (replace placeholders with your specific values and confirm exact syntax with GOTOP docs):

- Set server by domain example (placeholder syntax)
```
SERVER d.plaspy.com,8888
```

- Set server by IP example (placeholder syntax)
```
SERVER 54.85.159.138,8888
```

- Choose transport example (placeholder syntax)
```
SET TRANSPORT UDP
```

- Save and reboot example (placeholder syntax)
```
SAVE
REBOOT
```

Note: The exact SMS or command syntax, command keywords, and required authentication will depend on GOTOP GV6 firmware. These examples are conceptual and must be adapted to the official GV6 command set from GOTOP.

## Configuration Notes

- GV6 firmware versions and regional hardware variants can change command syntax and supported features; always check GOTOP documentation for your specific firmware.
- When given a choice, UDP is commonly used for low overhead telemetry while TCP can be selected for devices requiring connection reliability; test both if unsure.
- SMS based configuration and cloud provisioning are both mentioned in GOTOP materials; pick the method supported by your deployment and operator constraints.
- Confirm APN and mobile operator settings on the SIM before configuring the Plaspy endpoint so the device has an active data path.
- Because Plaspy uses the same port 8888 for all devices and detects protocols automatically, focus on correctly setting the server address and transport on the GV6.

## Why Use Plaspy with This Configuration

Integrating the GOTOP GV6 with Plaspy gives teams consistent visibility into asset location, alarm events, and telemetry streams using a straightforward configuration model. The GV6 hardware is designed for long-life deployments and multi-mode positioning, while Plaspy provides the cloud intake and processing so you can monitor routes, respond to alerts, and analyze historical data.

To learn more about Plaspy and how the platform handles device ingestion and fleet monitoring visit https://www.plaspy.com. For the latest device specific configuration instructions, command syntax, and firmware information consult the official GOTOP website https://www.gotop.cc/ since manufacturer setup methods and firmware behavior can change over time.
