---
slug: /teltonika/fmm640/configuration
id: fmm640-configuration
sidebar_label: Configuration
title: Teltonika - FMM640 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting Teltonika FMM640 to Plaspy with server settings and example commands
keywords:
  - Teltonika FMM640 configuration
  - Teltonika FMM640 setup
  - FMM640 server configuration
  - FMM640 Plaspy setup
  - Teltonika GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet tracking Teltonika FMM640
  - GPS tracker server settings
  - Teltonika configuration commands
---

# Teltonika - FMM640 Configuration

This page provides the public configuration context for using the Teltonika FMM640 with Plaspy. It summarizes the shared Plaspy server settings, typical preparation steps, and a practical example command snippet taken from publicly available Teltonika configuration examples. Use this guide to understand how the FMM640 can be pointed at Plaspy and which values are required for platform visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. The FMM640 supports multiple configuration methods such as SMS and Teltonika Configurator and may require firmware specific steps for certain options.

## Configuration Overview

Configuring the FMM640 for Plaspy prepares the device to send location and event data to a single Plaspy endpoint so devices appear in the platform reliably. The public configuration process focuses on setting network access, the Plaspy server endpoint, transport parameters, and verifying that the device is reporting correctly.

- Set the device APN and network credentials so the unit has mobile data connectivity.
- Point the tracker to the shared Plaspy server endpoint so data is routed to Plaspy.
- Select the transport option (UDP or TCP) on the device if required.
- Save and apply the configuration and restart the tracker if necessary to activate settings.
- Validate device connectivity and confirm the tracker is visible inside Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible according to the installer procedure for the FMM640.
- Active SIM with an appropriate mobile data plan and APN credentials for the network where the device will operate.
- Access to the Teltonika configuration method you prefer such as SMS commands or Teltonika Configurator and FOTA Web if needed.
- Knowledge of the APN values for the SIM including APN name, APN user, and APN password when required.
- A Plaspy account or onboarding information so you can confirm the device appears in the platform after configuration.
- Basic familiarity with the device firmware version and any release notes that affect configuration commands.

## How This Tracker Connects to Plaspy

When configured for Plaspy the FMM640 is set to report its position and events to the shared Plaspy server endpoint and port so that the device appears in the Plaspy platform for monitoring and reporting. Plaspy receives incoming device connections on the same port for all devices and identifies the device protocol automatically.

- The tracker sends periodic location updates to d.plaspy.com or to 54.85.159.138 on port 8888.
- Data may use UDP or TCP depending on the transport selected during configuration.
- Plaspy automatically detects the tracker protocol and associates incoming data with the device record.
- Events such as movement, geofence triggers, and alarms are forwarded to Plaspy for visibility.
- After successful configuration, the device is visible in Plaspy for operational monitoring and reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software such as SMS commands, Teltonika Configurator, or FOTA Web.
2. Set the APN parameters so the FMM640 has network access using values for APN name, APN user, and APN password.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the device endpoint.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires transport selection during configuration.
6. Apply or save the configuration and restart the device if required by the firmware or workflow.
7. Validate that the device reports to Plaspy and appears in the platform with live or recent data.

## Example Configuration Commands

The following example is derived from published Teltonika style setparam commands. It configures APN credentials and the Plaspy server endpoint and port in a single batch command. Placeholders are preserved for your APN values.

- Example SMS batch command format provided by the device documentation:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields
- [apn] is the mobile network APN name for your SIM.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.
- The command sets the server domain to d.plaspy.com and the server port to 8888 as required by Plaspy.
- The final parameter 2006 is included in the published example; consult Teltonika documentation to confirm what transport or mode value is expected for your firmware and whether you should use UDP or TCP.

If you prefer to use the Plaspy server IP directly rather than the domain name, you can replace d.plaspy.com with 54.85.159.138 in your command according to your operator needs and device capabilities.

## Configuration Notes

- Teltonika firmware versions and firmware-specific parameter numbering can vary; always confirm parameter mappings against the Teltonika FMM640 documentation for your firmware revision.
- The FMM640 supports SMS and software tools for configuration; choose the method that matches your installation practice and security requirements.
- Use UDP or TCP based on network reliability and any guidance in Teltonika documentation; Plaspy accepts either transport on the shared port.
- Remember that Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol so consistent server and port values are critical.
- When using placeholders keep your APN credentials secure and verify them with your mobile operator.

## Why Use Plaspy with This Configuration

Using the Teltonika FMM640 with Plaspy provides a straightforward way to bring the device online in a single platform endpoint. Pointing the tracker at Plaspy's shared server and port allows organizations to consolidate telemetry from multiple devices and manufacturers while relying on Plaspy to detect protocols automatically. This simplifies onboarding and makes operational visibility and reporting more consistent across a mixed fleet.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, parameter definitions, and firmware behavior consult the official Teltonika documentation at https://www.teltonika-gps.com/ to verify current setup methods and parameter mappings.
