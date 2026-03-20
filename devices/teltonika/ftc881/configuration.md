---
slug: /teltonika/ftc881/configuration
id: ftc881-configuration
sidebar_label: Configuration
title: Teltonika - FTC881 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FTC881 to connect with Plaspy using shared server settings and example device commands
keywords:
  - Teltonika FTC881 configuration
  - Teltonika FTC881 setup for Plaspy
  - FTC881 server configuration
  - FTC881 GPS tracker configuration
  - Teltonika tracker Plaspy
  - FTC881 installation guide
  - FTC881 tracking platform setup
  - Teltonika FT platform configuration
  - FTC881 APN setup
  - fleet tracking FTC881
---

# Teltonika - FTC881 Configuration

This page provides public configuration context for using the Teltonika FTC881 with Plaspy. It collects the shared Plaspy server information and a practical example command provided for the FTC881 so you can prepare devices for connection and visibility in Plaspy dashboards.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to choose a different port per tracker. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika tools you use for configuration. The example setparam command shown later is a common Teltonika batch parameter command and is included here as public reference.

## Configuration Overview

The goal of configuring an FTC881 for Plaspy is to point the device to Plaspy's shared server endpoint, ensure cellular data connectivity is available, and validate that the tracker reports to the platform. This prepares the unit for live tracking, event reporting, and historical route analysis.

- Set the tracker to report to Plaspy using the provided server domain or IP and the shared port.
- Configure APN and any required cellular authentication so the device has data access.
- Select UDP or TCP transport on the device if required and save the change.
- Validate connectivity and that Plaspy receives the first position reports to confirm visibility.
- Use Teltonika configuration tools or SMS batch commands to apply settings across devices for fleet rollouts.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and platform ingestion
- Server IP 54.85.159.138 as an alternative endpoint for devices that require an IP address
- Port 8888 used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol so one shared port is used across devices

## Typical Requirements Before Setup

- A charged and installed FTC881 with access to its configuration interface or SMS command facility
- An active cellular SIM with a valid APN and data plan appropriate for telemetry
- Access to Teltonika configuration methods such as TCT, FOTA WEB, or SMS command capability
- Knowledge of the vehicle or asset installation so inputs, power and antenna placement are correct
- A list of device identifiers such as IMEI so you can confirm the specific tracker in Plaspy after reporting
- Administrative access to apply settings and restart the device if required

## How This Tracker Connects to Plaspy

When configured, the FTC881 sends GNSS positions and device telemetry over the cellular network to the Plaspy server endpoint and port. Plaspy receives those messages, automatically determines the tracker protocol, and maps incoming data into the platform for live and historical use.

- The device is configured to report to the shared Plaspy endpoint d.plaspy.com or to 54.85.159.138
- Data is transmitted over port 8888 which Plaspy uses for all supported devices
- You may choose UDP or TCP as the transport if the device requires a transport selection
- Plaspy automatically detects the tracker protocol and begins processing messages once they arrive
- Successful connection enables live tracking, event alerts, and telemetry visibility in Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as TCT, FOTA WEB, or SMS commands.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP transport if the tracker firmware requires selecting a transport type.
5. Configure APN and any cellular credentials required for the device to access the mobile network.
6. Apply or save the configuration and restart the device if the method or firmware requires a reboot.
7. Validate that the FTC881 reports to Plaspy by confirming incoming messages or position updates for the device IMEI in the platform.

## Example Configuration Commands

Teltonika devices commonly accept batch parameter commands. The following public command example sets APN values and points the device to Plaspy using the domain name and port. Preserve the placeholders when you replace them with your actual APN values.

- Example Teltonika batch setparam command

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields
  - [apn] placeholder for your SIM card APN name
  - [apnu] placeholder for APN username if required by the mobile operator
  - [apnp] placeholder for APN password if required by the mobile operator
  - 2004 sets the server domain to d.plaspy.com
  - 2005 sets the port to 8888
  - 2006 is commonly used to set transport or activation flags depending on firmware; follow Teltonika documentation for exact parameter meanings on your firmware

Note: Use the Teltonika configuration channel appropriate for your device and firmware. The command above is a public example and should be applied as documented by Teltonika for your device model and firmware version.

## Configuration Notes

- Teltonika firmware versions and parameter indices can vary; always confirm the parameter numbers and meanings against current Teltonika documentation for the FTC881 before applying changes.
- You can use either d.plaspy.com or 54.85.159.138 as the server value; choose the form required by your configuration tool or SMS command workflow.
- Select UDP or TCP based on your tracker firmware options and network considerations; Plaspy will automatically detect the protocol used.
- For fleet rollouts, apply settings via Teltonika TCT, FOTA WEB, or batch SMS commands to reduce manual configuration time.
- Verify device reporting by monitoring the device IMEI or identifier in Plaspy after the initial configuration and reboot if necessary.

## Why Use Plaspy with This Configuration

Using the FTC881 with Plaspy provides a straightforward path to continuous visibility and telemetry for vehicles and heavy assets. Pointing the device to Plaspy's shared server and port makes it simple to onboard devices at scale while Plaspy handles protocol detection and data ingestion, enabling live maps, alerts, and historical reporting.

To learn more about Plaspy and how the platform works with Teltonika trackers visit https://www.plaspy.com. For the most current device parameters, firmware behavior and official setup details consult Teltonika documentation at https://www.teltonika-gps.com/ to verify device specific instructions and parameter lists.
