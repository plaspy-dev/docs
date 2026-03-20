---
slug: /okb_tehnoavtomatika/mta_glonass_ver_12m/configuration
id: mta_glonass_ver_12m-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver. 12M) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the OKB Tehnoavtomatika MTA-Glonass ver 12M with Plaspy server settings and setup workflow
keywords:
  - OKB Tehnoavtomatika MTA-Glonass configuration
  - MTA-Glonass ver 12M setup
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - fleet tracking setup Plaspy
  - vehicle telemetry configuration
  - MTA Glonass GPRS setup
  - Plaspy server settings guide
  - GPS platform integration
  - tracker connectivity best practices
---

# OKB Tehnoavtomatika - MTA-Glonass (ver. 12M) Configuration

This page documents the public configuration context for using the OKB Tehnoavtomatika MTA-Glonass (ver 12M) tracker with the Plaspy platform. It summarizes the practical server settings and the general steps you will follow to point this terminal at Plaspy for live position updates, telemetry and event reporting, based on the device capabilities described in the manufacturer materials and Plaspy public settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type and vendor configuration tools. Use this guide to prepare the device for Plaspy integration and consult the device manufacturer for the most current device specific instructions.

## Configuration Overview

The goal of configuring the MTA-Glonass (ver 12M) for Plaspy is to ensure the terminal sends its GPS and telemetry data to the Plaspy endpoint reliably and in a format the platform can process. Configuration focuses on setting the correct server endpoint, choosing transport, and validating connectivity so the device becomes visible in your Plaspy account.

- Point the tracker to the Plaspy server endpoint so GPRS DATA uploads reach the platform.
- Choose the transport mode supported by the device and Plaspy, UDP or TCP, on the shared Plaspy port.
- Verify network connectivity, APN and SIM data plan so the device can open a data session.
- Apply and save settings on the tracker and perform a restart if recommended by the manufacturer.
- Validate the device is reporting positions and telemetry to Plaspy for live map and alerting.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support: UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol once the device reports to the server

## Typical Requirements Before Setup

- Confirm the MTA-Glonass (ver 12M) has a compatible SIM card and a data plan enabled for GPRS or DATA traffic.
- Ensure the device is powered and battery charged, or connected to vehicle power within the supported input range.
- Obtain access to the manufacturer configuration method or software for this model.
- Verify cellular coverage for the intended area and that GSM 900 or 1800 is available.
- Have a Plaspy account and device registration process ready to verify the unit appears in the platform once it reports.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the MTA-Glonass (ver 12M) establishes a data connection via GPRS or DATA and transmits position, event and telemetry records to the shared Plaspy server endpoint. Plaspy receives the packets on the platform port and automatically identifies the device protocol so no device specific port mapping is required.

- The tracker initiates outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.
- You may select UDP or TCP transport on the device if the firmware requires a transport selection.
- The device sends periodic position reports and event telemetry which Plaspy ingests for live maps and alerts.
- Plaspy’s automatic protocol detection processes the incoming data from the device type without requiring per device protocol selection on the server side.
- After configuration and successful reporting, the device becomes visible in Plaspy for monitoring and historical reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the MTA-Glonass ver 12M.
2. Enter the Plaspy server address by specifying d.plaspy.com or 54.85.159.138 in the device server field.
3. Set the device port to 8888 (all devices in Plaspy use the same port).
4. Choose UDP or TCP as the transport option if the device firmware requires a transport selection.
5. Configure APN and any SIM related settings required for GPRS or DATA connectivity.
6. Apply or save the configuration and restart the device if the manufacturer recommends it.
7. Validate that the device reports to Plaspy by confirming it appears and sends telemetry in your Plaspy account.

## Example Configuration Commands

The exact configuration command set varies by manufacturer tool, firmware and whether configuration is done via SMS, USB, serial console or a vendor application. Because the MTA-Glonass (ver 12M) uses manufacturer specific commands and utilities, refer to the official OKB Tehnoavtomatika configuration guide for exact command syntax. In general you will point the device to the Plaspy endpoint and port as shown here in conceptual form:

- Use the manufacturer tool or messaging format to set the server domain or IP to d.plaspy.com or 54.85.159.138.
- Set the upload port to 8888.
- If required, set transport to UDP or TCP depending on device options.
- Configure APN and SIM parameters so the device can open a GPRS data session.

Because exact commands and messages differ by firmware and configuration interface, follow the official device command reference for the correct syntax and ordering.

## Configuration Notes

- Manufacturer firmware versions and configuration interfaces can change the exact steps required to set server and transport values.
- Choose UDP for lower overhead where supported, or TCP when a connection oriented transport is preferred; Plaspy accepts either on port 8888.
- Plaspy uses a single shared port and performs automatic protocol detection, so you do not need to assign device specific server ports on the backend.
- If SMS based configuration is supported by your MTA-Glonass, follow the device SMS command reference; otherwise use the official software or a wired connection.
- Always save or apply settings and reboot the device if the manufacturer recommends a restart to ensure new network parameters take effect.

## Why Use Plaspy with This Configuration

Using the MTA-Glonass (ver 12M) with Plaspy gives operators a reliable path to real time location, event reporting and telemetry ingestion. The terminal’s GPRS and SMS capabilities, combined with Plaspy’s automatic protocol detection and shared server endpoint, allow fleet managers to deploy and verify devices quickly and view actionable data in the Plaspy platform.

Learn more about Plaspy at https://www.plaspy.com and verify device specific configuration, firmware behavior and the latest manufacturer instructions at the OKB Tehnoavtomatika website http://www.okb-ta.ru/ so you have the most current and accurate setup procedure.
