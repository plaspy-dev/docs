---
slug: /cantrack/g200ny/configuration
id: g200ny-configuration
sidebar_label: Configuration
title: CanTrack - G200NY Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack G200NY GPS tracker and practical steps to connect it with Plaspy using shared server settings
keywords:
  - CanTrack G200NY configuration
  - CanTrack G200NY setup
  - CanTrack G200NY Plaspy
  - G200NY server configuration
  - G200NY GPS tracker setup
  - livestock GPS tracker configuration
  - Plaspy tracker integration
  - GPS platform setup guide
  - tracker reporting configuration
  - remote device configuration
---

# CanTrack - G200NY Configuration

This page covers the public configuration context for using the CanTrack G200NY tracker with the Plaspy platform. It explains the shared server settings Plaspy requires and provides a practical setup workflow so you can prepare the G200NY for reliable reporting to Plaspy. Use this document together with the manufacturer's guides to complete device side steps and confirm device-specific behavior.

Plaspy uses a single, shared server endpoint and port for all supported trackers and automatically detects the correct tracker protocol. Manufacturer side steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools, so confirm any device specific commands or menus with CanTrack documentation while following the general workflow shown here.

## Configuration Overview

Preparing a G200NY for Plaspy focuses on pointing the device to the shared Plaspy endpoint, confirming cellular connectivity, and validating that position and event data appear in the platform. The following tasks are the practical goals during configuration.

- Point the device reporting endpoint to Plaspy using the shared server settings.
- Confirm the device has active cellular connectivity and correct APN or SIM settings for outbound telemetry.
- Choose transport mode if the device requires a UDP or TCP selection and set the same port used by Plaspy.
- Apply and save configuration on the device and perform a restart if required by the manufacturer workflow.
- Validate that the G200NY successfully reports to the Plaspy server and appears in your Plaspy account.
- Keep firmware and OTA update policies in mind to ensure consistent behavior over time.

## Plaspy Server Settings

Set the device to report to Plaspy using the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol, and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Fully charged device battery or a stable power source for initial configuration and testing.
- An active SIM card with data access appropriate for the device carrier and region, and APN settings available if required.
- Access to the official CanTrack configuration method or vendor tool for the G200NY such as SMS commands, web tool, or manufacturer app as provided by CanTrack.
- Knowledge of firmware version and device model details to follow the correct manufacturer procedure.
- A Plaspy account and basic familiarity with monitoring a new device in the Plaspy console to validate reporting.
- A short testing plan to confirm GPS fix and telemetry reachability once the device is pointed at Plaspy.

## How This Tracker Connects to Plaspy

The G200NY uses its cellular link to send periodic position and event reports to the Plaspy server endpoint. Once configured to use the Plaspy server and port, the device transmits GNSS and assisted location data for ingestion and display by Plaspy.

- The tracker reports location and telemetry to the shared Plaspy endpoint d.plaspy.com on port 8888.
- You may select UDP or TCP on the device if it requires a transport choice; Plaspy accepts both transports on the same port.
- Plaspy automatically determines the device protocol so the platform can parse incoming messages from the G200NY without per device port changes.
- Reported events such as movement, SOS alerts, and geo-fence triggers are forwarded to Plaspy for notification and historical logging.
- Successful configuration makes the device visible in the Plaspy console where you can monitor real time position and device health.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G200NY as described in the manufacturer documentation.
2. Enter the Plaspy endpoint by configuring the device to use d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.
4. If the device requires a transport selection, choose UDP or TCP and set it to use port 8888.
5. Apply or save the configuration in the device tool or via SMS command as provided by CanTrack.
6. Restart the device if the manufacturer workflow specifies a reboot for new network settings to take effect.
7. Validate that the G200NY reports to Plaspy by checking the device appearance and telemetry in your Plaspy account and confirming recent location updates.

## Example Configuration Commands

No public device specific configuration commands were provided in the model configuration content for this page. Exact command syntax and the method of sending settings vary by CanTrack firmware and the vendor tool used. Common manufacturer methods include SMS configuration commands, a PC or web tool, or an OTA configuration pushed by CanTrack or an authorized integrator. Consult the CanTrack documentation for the exact command set for:

- setting server domain or IP
- setting the reporting port
- selecting UDP or TCP if required
- configuring APN or SIM details

If you need command examples, refer to the official CanTrack guides or contact CanTrack support for the canonical SMS or tool commands for the G200NY.

## Configuration Notes

- Firmware differences may change the command syntax, menu labels, or required reboot behavior; always confirm commands for your device firmware.
- If you must choose between UDP and TCP, test both transports as available. Plaspy accepts both on port 8888 and will detect the protocol automatically.
- Ensure the device APN and SIM settings are correct for your cellular provider so the G200NY can establish outbound connections.
- Use a short reporting interval for initial validation, then increase intervals to conserve battery for long term livestock deployments.
- Keep OTA update policies in mind; some configuration changes may be overwritten by firmware pushes if devices are centrally managed by the vendor.

## Why Use Plaspy with This Configuration

Using the CanTrack G200NY with Plaspy gives ranch operators and researchers a practical path to continuous location visibility, event notifications, and remote management. The G200NY is designed for long autonomy in harsh environments, and configuring it to report to Plaspy centralizes telemetry for monitoring, alerts, and historical analysis without per device server complexity.

Learn more about Plaspy and how it supports device telemetry and fleet visibility at https://www.plaspy.com. For device specific commands, firmware information, and the latest setup instructions for the G200NY, verify details with CanTrack at https://www.cantrackgps.com/ since manufacturer configuration methods and firmware behavior can change over time.
