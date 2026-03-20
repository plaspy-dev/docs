---
slug: /teltonika/ftm880/configuration
id: ftm880-configuration
sidebar_label: Configuration
title: Teltonika - FTM880 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Teltonika FTM880 GPS tracker to Plaspy with practical server settings and example commands
keywords:
  - Teltonika FTM880 configuration
  - Teltonika FTM880 setup
  - FTM880 Plaspy configuration
  - Plaspy tracker configuration
  - Teltonika GPS tracker setup
  - FTM880 server configuration
  - fleet tracking setup
  - asset tracker configuration
  - GPS tracker integration
  - vehicle tracking platform
---

# Teltonika - FTM880 Configuration

This page documents the public configuration context for using the Teltonika FTM880 with Plaspy. It focuses on the shared Plaspy server settings, the practical steps you need to prepare the tracker for communication with Plaspy, and an example command that is commonly used to write basic connection parameters on Teltonika devices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available we include example Teltonika commands and explain placeholders so you can adapt them to your environment.

## Configuration Overview

The configuration process prepares the FTM880 to send its position and telemetry to Plaspy and ensures the tracker is visible and manageable from the platform. This typically involves setting network access parameters, pointing the device at the Plaspy server, selecting transport, and validating that reports arrive in the platform.

- Configure APN and network credentials so the device can reach Plaspy over the mobile network.
- Set the device server endpoint to the Plaspy server and configure the port used by Plaspy.
- Choose the transport protocol (UDP or TCP) if the device requires an explicit selection.
- Save or apply the settings and restart the tracker when required so the new parameters take effect.
- Validate connectivity by confirming the device appears and reports in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (this is the port used by Plaspy for all supported devices)  
- Transport support: device may be configured using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoints to use when configuring the FTM880 for reporting.

## Typical Requirements Before Setup

- Confirm the FTM880 is powered and accessible for configuration and that its battery is sufficiently charged for commissioning.  
- Ensure you have a compatible SIM with a data plan enabled for LTE Cat M1 or NB‑IoT where the SKU requires it; confirm APN credentials with the operator.  
- Obtain the Teltonika configuration method you will use (SMS commands, Teltonika configuration tool, or the FT platform) and the device documentation for your firmware version.  
- If using SMS-based configuration, verify the device can receive SMS and you have the mobile number that will send the commands.  
- Access to Plaspy account or platform support contact to confirm device registration or activation workflows after initial reporting.  

## How This Tracker Connects to Plaspy

The FTM880 sends location and available telemetry to the shared Plaspy server endpoint so the platform can display live positions, generate alerts, and keep historical records. Configure the device to report to the Plaspy server (d.plaspy.com or 54.85.159.138) on port 8888 using the transport the device supports.

- The tracker transmits position and telemetry over the mobile network to d.plaspy.com or 54.85.159.138 on port 8888.  
- Plaspy receives and automatically detects the tracker protocol to parse incoming messages.  
- The platform processes geofence events, alerts, and telemetry for live monitoring and reports.  
- Remote management workflows such as firmware updates and provisioning can be coordinated via Teltonika platforms and reflected in Plaspy where supported.  
- Validating connectivity requires confirming the device is listed and reporting within the Plaspy interface after configuration.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your device and firmware (for example SMS batch commands, Teltonika configuration tools, or FT platform).  
2. Configure the device APN and network credentials so it can reach the internet.  
3. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server settings.  
4. Set the server port to 8888 (Plaspy uses the same port for all devices).  
5. Choose UDP or TCP if the device requires a transport selection.  
6. Apply or save the configuration and restart the device if required by the manufacturer or configuration method.  
7. Validate that the FTM880 reports to Plaspy by checking the device status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The following example is a Teltonika SMS batch command format commonly used to write basic parameters. Preserve the placeholders and replace them with your operator and account values before sending.

- Purpose: set APN, APN username, APN password, Plaspy server domain, Plaspy port, and transport selection.
- Replace [apn], [apnu], and [apnp] with your carrier APN, APN username, and APN password respectively.

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields:
- [apn] = your mobile network APN.  
- [apnu] = APN username if required by your operator, otherwise leave empty.  
- [apnp] = APN password if required by your operator, otherwise leave empty.  
- 2004 in this command sets the Plaspy server address to d.plaspy.com.  
- 2005 sets the port to 8888 used by Plaspy.  
- 2006 is used here to indicate a transport selection where applicable; consult Teltonika parameter documentation for the correct value for UDP or TCP on your firmware.

If you use Teltonika configuration software or the FT platform instead of SMS, apply the same server domain or IP and port values in the corresponding server connection fields.

## Configuration Notes

- Teltonika parameter IDs and command syntax can differ by firmware and device variant; always check the device documentation for your firmware revision.  
- The example command shown uses SMS batch syntax which is supported on many Teltonika devices; software tools provide an alternative GUI method for the same parameters.  
- Choose UDP or TCP based on your installation requirements and device firmware support; some networks or carriers behave differently with each transport.  
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.  
- For large deployments prefer remote provisioning methods such as Teltonika FOTA WEB or platform provisioning to scale configuration and firmware management.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FTM880 to report to Plaspy provides centralized visibility for remote, battery‑mounted assets and heavy equipment. With the FTM880 configured to send telemetry to the shared Plaspy server endpoint and port, operations teams can receive live position updates, geofence alerts, and device status in a single fleet management platform.

Learn more about Plaspy and how it can integrate with trackers like the FTM880 at https://www.plaspy.com. For device specific configuration details, firmware behavior, and the latest parameter documentation verify information with the manufacturer at https://www.teltonika-gps.com/ to ensure your setup matches current Teltonika guidance.
