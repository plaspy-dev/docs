---
slug: /castel/mpip_619/configuration
id: mpip_619-configuration
sidebar_label: Configuration
title: Castel - MPIP-619 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Castel MPIP-619 GPS tracker and server settings for use with Plaspy
keywords:
  - Castel MPIP-619 configuration
  - Castel MPIP-619 setup
  - Castel MPIP-619 Plaspy
  - Plaspy tracker configuration
  - GPS tracker setup motorcycle
  - vehicle tracking configuration
  - GPRS SMS tracker setup
  - tracker server settings
  - GPS platform setup
  - Castel tracker integration
---

# Castel - MPIP-619 Configuration

This page covers the public configuration context for using the Castel MPIP-619 with the Plaspy platform. It focuses on the practical server and device-side settings that are part of the public setup flow and explains how to prepare the MPIP-619 to report to Plaspy for fleet visibility and tracking.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol used by the MPIP-619. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the steps below together with the official Castel documentation and the device's SMS or configuration interface.

## Configuration Overview

This configuration process prepares the MPIP-619 to send position and event data to Plaspy so assets become visible and manageable in the platform. The MPIP-619 supports SMS and GPRS configuration, and public commands are commonly sent by SMS for on-vehicle setup.

- Configure the device APN and server settings so the tracker can connect to Plaspy over mobile data.
- Set the transport endpoint to the Plaspy server so reporting uses the shared platform endpoint and port.
- Validate connectivity and confirm the device successfully reports to the Plaspy endpoint.
- Use SMS queries or the device web/firmware tool to verify the configured GPRS parameters and server.
- Ensure the tracker power and SIM are operational so data sessions and SMS commands complete.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support UDP or TCP on port 8888 depending on tracker requirements  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered MPIP-619 unit installed or connected to a stable 9–36 VDC source.  
- An active SIM card with data (GPRS) and SMS enabled and no PIN lock.  
- Knowledge of the carrier APN, and APN username and password if required (placeholders shown below).  
- Access to the device's SMS command method or the official Castel configuration tool.  
- The device identifier to derive the SMS secret key if using SMS configuration.

## How This Tracker Connects to Plaspy

The MPIP-619 is configured to report location, alerts, and status to the shared Plaspy server endpoint and port so vehicles can be monitored in Plaspy. Reporting can be initiated over GPRS once the APN and server settings are applied, and SMS commands are commonly used to set or verify those values.

- The tracker is set to the Plaspy server domain or IP (d.plaspy.com or 54.85.159.138) and port 8888.  
- The device uses either UDP or TCP transport to send data to port 8888 as configured.  
- After configuration, the device opens a GPRS session to send position reports and events to Plaspy.  
- Plaspy automatically detects the tracker protocol and processes incoming reports for visibility and event handling.  
- Status and configuration can be checked via SMS commands as supported by the device.

## Common Configuration Workflow

1. Access the official Castel configuration method or software, or prepare to use SMS-based commands as documented by Castel.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.  
3. Set port 8888 for the device reporting port.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Configure the device APN, APN user, and APN password as required by the SIM operator.  
6. Apply or save the configuration using the device tool or send the SMS set command.  
7. Restart the device if required by the manufacturer or after saving settings.  
8. Validate that the device reports to Plaspy by checking for incoming data in the platform and using the device verification SMS command if available.

## Example Configuration Commands

The MPIP-619 supports SMS-based configuration. The default SMS secret key for the device is the last 6 ASCII characters of the device ID. Replace [SecretKey] with that value when sending commands.

- Set the APN settings and Plaspy server IP and port (replace placeholders as needed):

```text
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Check the current GPRS settings:

```text
*[SecretKey]#get gprs#*
```

Notes on placeholders:
- [apn] = carrier APN (e.g., internet or a specific operator APN)  
- [apnu] = APN username if required by carrier (leave blank if not required)  
- [apnp] = APN password if required by carrier (leave blank if not required)

Send these SMS messages from an authorized number or according to Castel's SMS authorization rules. The order of commands matters: set GPRS first, then verify with get GPRS.

## Configuration Notes

- Firmware differences may change exact SMS syntax or available parameters; always verify with the device manual for your firmware revision.  
- SMS-based setup is commonly supported by the MPIP-619 but vendor configuration tools or USB/serial methods may also be available depending on the unit.  
- Choose TCP or UDP based on installer preference and any specific network considerations; Plaspy accepts both and detects protocol automatically.  
- Keep the device secret key safe and confirm how to derive it from the device ID before sending SMS configuration commands.  
- Test connectivity after configuration by confirming the device appears in Plaspy and by using the get gprs verification command.

## Why Use Plaspy with This Configuration

Using the Castel MPIP-619 with Plaspy lets organizations gain consistent location visibility and event reporting through a shared server endpoint. The MPIP-619's support for SMS and GPRS configuration makes it straightforward to point units at Plaspy's server and begin receiving telemetry for fleet monitoring, alerts, and operational analysis.

To learn more about Plaspy and how this configuration integrates with the platform visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details check Castel documentation at http://www.castelecom.com/ as hardware and setup procedures can change over time.
