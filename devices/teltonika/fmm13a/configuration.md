---
slug: /teltonika/fmm13a/configuration
id: fmm13a-configuration
sidebar_label: Configuration
title: Teltonika - FMM13A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMM13A with Plaspy including server settings example commands and practical setup notes
keywords:
  - Teltonika FMM13A
  - FMM13A configuration
  - Teltonika configuration
  - Plaspy compatible tracker
  - GPS tracker setup
  - fleet management tracker
  - FMM13A server configuration
  - vehicle tracking setup
  - GPS platform integration
  - Teltonika Plaspy setup
---

# Teltonika - FMM13A Configuration

This page covers the public configuration context for using the Teltonika FMM13A with Plaspy. It focuses on the shared Plaspy server settings, practical setup guidance, and an example command observed in public Teltonika configuration flows so you can prepare the device to report telemetry and location to Plaspy.

Plaspy uses a single shared server endpoint and port across supported trackers and automatically detects the tracker protocol at the platform side. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tooling; use the details here as practical public guidance and confirm device-specific steps with Teltonika documentation when needed.

## Configuration Overview

The goal of this configuration process is to prepare the FMM13A to send telemetry and GNSS location to Plaspy reliably over cellular data, validate connectivity, and enable device visibility inside the Plaspy platform. The public example command included in this page shows how basic network and server parameters are commonly applied to Teltonika devices.

- Set the device APN and any required credentials so the unit can access the mobile data network.
- Point the tracker to the Plaspy server domain or IP so reports reach Plaspy.
- Configure the port and transport selection as required by the device firmware.
- Save and apply the configuration and restart the device if the device requires it to begin reporting.
- Validate the device appears in Plaspy after configuration and is sending location and events.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (all devices in Plaspy use the same port)  
- Transport support for UDP or TCP depending on device requirement and firmware  
- Plaspy automatically detects the tracker protocol at the platform side

## Typical Requirements Before Setup

- Ensure the device has vehicle power applied and the internal backup battery is charged for safe setup and testing.  
- Have a valid SIM card provisioned with a data plan and correct APN information. Replace placeholder {{apn}} with your operator APN.  
- Access to the manufacturer configuration method you prefer such as SMS commands, Teltonika configuration tools, or remote device management like FOTA WEB. The example below uses an SMS style parameter command.  
- Know the device admin number or have the unit connected to a configuration cable or management system when required.  
- Verify the device firmware revision and any release notes that may affect parameter IDs or command formats.  

## How This Tracker Connects to Plaspy

When configured, the FMM13A sends its telemetry and location reports over the cellular data network to the shared Plaspy endpoint and port. Plaspy ingests the incoming device data, identifies the protocol automatically, and presents normalized telemetry and location in dashboards and APIs.

- The device uses its configured APN to establish a data session and reach d.plaspy.com or 54.85.159.138.  
- Location, input/output events, and sensor telemetry are transmitted to Plaspy on port 8888.  
- Transport can be selected as UDP or TCP on the device; Plaspy accepts either and auto detects the protocol used.  
- Plaspy normalizes the incoming messages so devices appear consistently in the platform regardless of protocol variant.  
- After configuration, verify that location updates and event reports are visible in Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method appropriate for the device such as SMS commands, Teltonika Configurator, or FOTA WEB remote management.  
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server parameter.  
3. Set the server port to 8888 which is used by Plaspy for all supported devices.  
4. Choose UDP or TCP on the device if it requires transport selection; use the transport value required by your firmware.  
5. Configure APN and any APN credentials using the placeholders provided by your operator and the example commands below.  
6. Apply or save the configuration and restart the device if required by the unit or firmware.  
7. Validate the device reports to Plaspy by checking for incoming data, location updates, and status in the Plaspy platform.

## Example Configuration Commands

The following public example command is a common Teltonika style parameter set that configures APN, APN credentials, server domain, port, and a transport flag. Replace the placeholders with your operator values before sending. This command may be used via SMS to the device administrator number or via a Teltonika configuration tool that accepts the same parameter format.

- Example parameter command:

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields:
  - {{apn}} = your mobile network APN string. Replace with your carrier APN.  
  - {{apnu}} = APN username if required by your carrier; otherwise leave blank or use the device method to clear.  
  - {{apnp}} = APN password if required by your carrier; otherwise leave blank or use the device method to clear.  
  - 2004 sets the server domain to d.plaspy.com so the device reports to Plaspy.  
  - 2005 sets the port to 8888 which Plaspy uses for all devices.  
  - 2006 sets a transport or related flag on the device; the exact meaning may vary by firmware so use the value required by your device or consult Teltonika documentation.

If your deployment uses the server IP address instead of domain name, substitute 54.85.159.138 for d.plaspy.com in the command as appropriate for your configuration method.

## Configuration Notes

- Parameter IDs and command formats can vary by Teltonika firmware revision; always confirm the correct parameter IDs for your firmware.  
- Choose UDP or TCP according to installer preference and device firmware capabilities; Plaspy accepts both and will auto detect the protocol.  
- SMS based configuration is commonly used for quick setup but using Teltonika remote management tools or a wired configurator can be preferable for batch deployments.  
- Plaspy uses the same port 8888 for all supported devices which simplifies multi-model fleet configuration.  
- Verify manufacturer documentation and firmware notes for any device-specific behaviors that affect connectivity or remote commands.

## Why Use Plaspy with This Configuration

Using the Teltonika FMM13A with Plaspy gives fleets consistent, real-time visibility into location and telemetry while leveraging a common server endpoint and port. The FMM13A’s compact design, backup battery, and flexible I/O make it a practical choice for vehicle and asset tracking, and configuring it to report to Plaspy brings that data into centralized dashboards and reporting tools for operational oversight.

To learn more about Plaspy and how this configuration supports fleet monitoring visit https://www.plaspy.com. For the latest device specific commands, firmware details and parameter definitions always verify current information on the manufacturer website https://www.teltonika-gps.com/
