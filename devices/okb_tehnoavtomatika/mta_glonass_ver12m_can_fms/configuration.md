---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/configuration
id: mta_glonass_ver12m_can_fms-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for OKB Tehnoavtomatika MTA Glonass ver12M CAN FMS with Plaspy server settings and setup workflow
keywords:
  - OKB Tehnoavtomatika MTA Glonass configuration
  - MTA Glonass ver12M CAN FMS setup
  - MTA Glonass Plaspy configuration
  - Plaspy server settings guide
  - vehicle tracker configuration Plaspy
  - CAN FMS telemetry setup
  - GNSS tracker configuration guide
  - fleet tracking MTA Glonass
  - GPS tracker integration Plaspy
  - telemetry and fuel monitoring setup
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Configuration

This page documents the public configuration context for using the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) with Plaspy. It focuses on the practical server and workflow information required to send GNSS coordinates and vehicle telemetry from the tracker to Plaspy, using the publicly available integration details and shared Plaspy server settings.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol on the backend. Manufacturer side setup steps for the MTA-Glonass can vary by firmware, hardware revision, installation type, or vendor tooling, so use this guidance together with the device manual and the official manufacturer resources.

## Configuration Overview

This configuration process prepares the MTA-Glonass terminal to communicate reliably with Plaspy so that GNSS position, CAN FMS telemetry and sensor inputs are visible in Plaspy dashboards and reports. The aim is to set the device reporting endpoint, validate transport and connectivity, and confirm event reporting on the Plaspy platform.

- Configure the device reporting endpoint to point to the Plaspy server so position and telemetry packets are delivered.
- Choose and verify the transport method supported by the tracker, either UDP or TCP, and set the selected transport on the device.
- Ensure the device has a working SIM and data channel so GPRS or DATA transmissions can reach Plaspy with SMS fallback if applicable.
- Validate connectivity and event reporting so the device appears as an active asset in Plaspy and telemetry fields map correctly.
- Save and apply the configuration in the manufacturer tool and perform a test run to confirm location and telemetry delivery.

## Plaspy Server Settings

- Server domain d.plaspy.com is the public Plaspy endpoint for device reporting.  
- Server IP 54.85.159.138 may be used where direct numeric endpoints are required.  
- Port 8888 is the single port Plaspy uses for device connections. All devices in Plaspy use the same port.  
- Transport support for UDP or TCP is available; set UDP or TCP on the device if required by the configuration tool.  
- Plaspy automatically detects the tracker protocol so the server accepts multiple tracker protocols on the shared port and identifies them server side.

## Typical Requirements Before Setup

- Confirm the MTA-Glonass device is powered and accessible, with correct wiring and an active internal battery if required for offline testing.  
- Prepare a SIM card with a data plan enabled for GPRS or mobile data transfer and ensure network coverage at the installation site.  
- Obtain the official manufacturer configuration tool, SMS commands list, or access method from OKB Tehnoavtomatika for this model.  
- Have basic CAN FMS wiring and vehicle integration information available so CAN telemetry can be enabled and mapped.  
- Access to a Plaspy account or a system administrator who can verify the device appears and is sending telemetry to Plaspy.  
- Use the device manual to confirm firmware version and any device specific steps that affect server or APN settings.

## How This Tracker Connects to Plaspy

The MTA-Glonass sends GNSS coordinates and vehicle telemetry over the cellular data channel to Plaspy, with SMS used where supported as a fallback for messages or remote configuration. The device is configured to report to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and display it in dashboards.

- GNSS position and CAN FMS telemetry are transmitted over the GPRS or DATA channel to the Plaspy endpoint.  
- SMS fallback may be used for configuration or for limited telemetry delivery where supported by the device firmware.  
- The tracker reports to the Plaspy server at d.plaspy.com (or 54.85.159.138) using port 8888.  
- Transport may be configured as UDP or TCP on the device; Plaspy accepts either and auto detects the protocol.  
- Once reporting is active, Plaspy receives events for location, CAN parameters, fuel inputs and configured alerts.

## Common Configuration Workflow

1. Access the official OKB Tehnoavtomatika configuration method for the MTA-Glonass, such as the vendor software or SMS command set.  
2. In the configuration tool or SMS command, enter the Plaspy server address either as d.plaspy.com or as 54.85.159.138 depending on the device requirements.  
3. Set the device port to 8888 which is the standard Plaspy port used for all devices.  
4. Choose UDP or TCP if the device requires an explicit transport selection and matches it to the network policy.  
5. Apply or save the configuration in the manufacturer tool and confirm changes are written to the device.  
6. Restart the device if required by the firmware or recommended by the manufacturer to activate the new server settings.  
7. Validate that the device is reporting to Plaspy by checking device activity and telemetry on the Plaspy platform or by using Plaspy diagnostics.

## Example Configuration Commands

The exact command set and syntax are provided by OKB Tehnoavtomatika and can vary by firmware version or the configuration utility used. For this reason no universal command list is provided here. Use the official device manual or vendor configuration tool to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, selecting UDP or TCP as required.

If your vendor tool supports SMS configuration for remote setup, typical public steps include replacing the server host and port parameters in the official SMS commands and sending them from an authorized phone number. Always confirm command syntax against the MTA-Glonass command reference supplied by OKB Tehnoavtomatika.

## Configuration Notes

- Firmware and hardware revisions can change available configuration options and exact command syntax; always check the device manual for your specific firmware.  
- Choose TCP when you require connection oriented delivery and UDP when lower latency and lower overhead are preferred, based on installer and network guidance.  
- For CAN FMS mapping and fuel sensor inputs consult the vehicle wiring diagrams and confirm pulse or analog sensor types before configuring telemetry fields.  
- Applying configuration remotely via SMS or over the air may require the device to be listed as an authorized sender in the device settings.  
- Manufacturer documentation and support channels at OKB Tehnoavtomatika should be referenced for any advanced or device specific commands.

## Why Use Plaspy with This Configuration

Using the MTA-Glonass (ver.12M-CAN FMS) with Plaspy provides fleet operators with combined GNSS location and vehicle bus telemetry in a single integration. This pairing supports real time tracking, CAN FMS parameter ingestion for engine and vehicle metrics, fuel monitoring using analog or pulse inputs, and event reporting that feeds Plaspy alerts and historical reports.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup details, command syntax and firmware notes verify information with the manufacturer at http://www.okb-ta.ru/ as device behavior and setup methods can change over time.
