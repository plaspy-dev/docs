---
slug: /teltonika/ftc880/configuration
id: ftc880-configuration
sidebar_label: Configuration
title: Teltonika - FTC880 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Teltonika FTC880 to Plaspy using shared server settings and simple device commands
keywords:
  - Teltonika FTC880 configuration
  - FTC880 Plaspy setup
  - FTC880 server configuration
  - Teltonika tracker setup
  - FTC880 GPS tracker
  - Plaspy tracker integration
  - FTC880 SMS configuration
  - fleet tracking FTC880
  - vehicle tracker FTC880
  - Teltonika FOTA configuration
---

# Teltonika - FTC880 Configuration

This page provides public configuration guidance for using the Teltonika FTC880 with Plaspy. It focuses on the shared Plaspy server settings, the practical process for applying those settings to your FTC880, and the example command format provided by Teltonika for basic parameter setup. Use this as a practical reference for preparing the device to communicate with Plaspy; always cross-check device-specific details with official Teltonika documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps may vary by firmware revision, hardware variant, installation type, or the Teltonika configuration tool you choose. The FTC880 supports Teltonika remote management tools and SMS-style configuration commands; the example below shows the common setparam format used to set APN and server parameters before the device is validated in Plaspy.

## Configuration Overview

Configuring the FTC880 for Plaspy means preparing the tracker to send location and telemetry to the Plaspy endpoint, verifying connectivity, and ensuring the tracker is recognized by the platform. The goal is to apply the shared server values, confirm transport selection if required by the device, and validate reporting in Plaspy.

- Set the device APN and authentication placeholders so the tracker can use cellular data.
- Configure the FTC880 to report to the Plaspy server domain or IP and the shared port.
- Choose UDP or TCP transport on the device if the firmware requires an explicit selection.
- Save or apply settings and restart the device when required to enable reporting.
- Confirm the tracker appears in Plaspy and is sending expected position and event data.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support: UDP or TCP (the device may be configured to use either)  
- Plaspy automatically detects the tracker protocol when the device reports

## Typical Requirements Before Setup

- A charged and powered FTC880 with access to the manufacturer configuration method (SMS commands, Teltonika tools, or FOTA WEB)  
- A working cellular service and an active SIM provisioned with the correct APN settings for your operator  
- APN placeholders prepared: [apn], [apnu], [apnp] to be filled with your operator values as needed  
- Access to the Teltonika configuration flow or SMS control phone number to send configuration commands if using SMS-based setup  
- Basic knowledge of whether your installation requires UDP or TCP selection on the device

## How This Tracker Connects to Plaspy

The FTC880 transmits GNSS position and telemetry over the cellular link to the Plaspy endpoint so locations and events are visible in Plaspy dashboards and reports. The tracker is configured to point to Plaspy’s shared server endpoint and port so Plaspy can receive and automatically interpret the device protocol.

- Position updates and telemetry are sent from FTC880 to d.plaspy.com or 54.85.159.138 on port 8888  
- Transport can be configured as UDP or TCP on the device where firmware requires explicit choice  
- Plaspy’s automatic protocol detection identifies and parses the tracker protocol when data arrives  
- Event reporting (movement, connectivity, and device state) is forwarded to Plaspy for alerts and historical logs

## Common Configuration Workflow

1. Access the official Teltonika configuration method you plan to use (SMS commands, Teltonika FOTA WEB, or a Teltonika configuration tool).  
2. Prepare and enter the mobile operator APN values using the placeholders [apn], [apnu], and [apnp] if required.  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the device server endpoint.  
4. Set the device port to 8888 (Plaspy uses the same port for all supported devices).  
5. If the device requires, choose UDP or TCP as the transport option.  
6. Apply or save the configuration in the Teltonika tool or send the SMS configuration command.  
7. Restart the FTC880 if required by the configuration method, then validate that the device is reporting to Plaspy.

## Example Configuration Commands

The Teltonika example command below shows a single-line setparam style batch command commonly used to set APN and server parameters. Preserve and replace the APN placeholders with your operator values before sending.

- Example setparam command for basic parameters:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command:
- [apn] is the operator Access Point Name required for cellular data.  
- [apnu] and [apnp] are optional APN username and password placeholders; fill them only if your operator requires authentication.  
- 2004:d.plaspy.com sets the server domain to Plaspy. You may substitute 54.85.159.138 for the server IP if preferred.  
- 2005:8888 sets the Plaspy port used for all devices.  
- 2006:1 is a device parameter included in the example; its exact mapping (for example to transport selection) is device and firmware specific. Consult Teltonika documentation or your configuration tool for exact parameter meanings.

If you use Teltonika FOTA WEB or a desktop configuration utility, the same values (APN, d.plaspy.com or 54.85.159.138, port 8888, and transport) are applied through the GUI rather than SMS.

## Configuration Notes

- Teltonika firmware versions and parameter codes can vary; confirm parameter numbers and syntax in the FTC880 user manual or Teltonika support documentation.  
- SMS-based configuration is commonly supported for Teltonika devices, but ensure the device accepts SMS from your configuration number and that SMS control is enabled.  
- Choose UDP or TCP for transport based on your network and device firmware requirements; Plaspy will accept either on port 8888.  
- Always replace [apn], [apnu], and [apnp] with your cellular provider credentials where required.  
- After applying settings, allow a short window for the device to establish a session and for Plaspy to detect and parse the tracker protocol automatically.

## Why Use Plaspy with This Configuration

Using the FTC880 configured to report to Plaspy gives organizations a straightforward way to collect rugged, battery-optimized GNSS and device telemetry into a single tracking platform. The FTC880’s durability and remote management capabilities combined with Plaspy’s automatic protocol detection simplify fleet and asset visibility across mixed environments.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device-specific commands, firmware behavior, and parameter definitions, verify details on the manufacturer site https://www.teltonika-gps.com/ as Teltonika specifications and setup methods can change over time.
