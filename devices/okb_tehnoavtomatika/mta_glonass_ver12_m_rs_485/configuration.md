---
slug: /okb_tehnoavtomatika/mta_glonass_ver12_m_rs_485/configuration
id: mta_glonass_ver12_m_rs_485-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12-M RS-485) Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the MTA Glonass tracker for use with Plaspy servers and wired RS485 telemetry
keywords:
  - OKB Tehnoavtomatika MTA Glonass configuration
  - MTA Glonass RS485 setup
  - MTA Glonass Plaspy configuration
  - Plaspy server setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fuel monitoring RS485
  - GPRS SMS tracker setup
  - fleet management tracker
  - tracker server settings
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12-M RS-485) Configuration

This page documents the public configuration context for using the OKB Tehnoavtomatika MTA-Glonass (ver.12-M RS-485) tracker with Plaspy. It focuses on the practical server and connection settings required to forward location and wired-sensor telemetry into Plaspy, and explains what to check on the device and at installation time to ensure reliable reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools, so this page concentrates on the common, publicly available configuration values and the typical workflow to make this tracker visible in Plaspy.

## Configuration Overview

This configuration process prepares the MTA-Glonass to send GNSS positions, wired sensor telemetry from RS-485 peripherals, and event data to the Plaspy platform. The goal is to register the device on Plaspy by pointing the tracker to the shared Plaspy endpoint and validating that messages arrive correctly.

- Point the tracker to the Plaspy server endpoint and set the correct transport and port so data can reach Plaspy in real time.
- Configure mobile data and APN settings on the device so GPRS or DATA communication is available for reporting.
- Ensure RS-485 sensor wiring and input mapping are set so fuel and telemetry values are captured and forwarded.
- Save and apply settings, then verify device connectivity and that Plaspy receives the first messages.
- Validate event reporting such as ignition state and pulse/frequency inputs to confirm telemetry flows into Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device capability
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A powered and functioning MTA-Glonass unit with access to the manufacturer configuration method or software.
- An active cellular SIM with a data plan and correct APN settings for GPRS/DATA reporting.
- Wiring and integration completed for RS-485 and any digital or pulse inputs you intend to use.
- The device IMEI or unique identifier available for locating the unit on Plaspy if required.
- Access to documentation or a configuration interface from OKB Tehnoavtomatika for firmware specific steps.
- Battery charged or external power connected during configuration and testing.

## How This Tracker Connects to Plaspy

The MTA-Glonass reports location, events and wired-sensor telemetry to Plaspy by sending packets over the cellular link to the shared Plaspy endpoint and port. Once the device is configured to use the Plaspy server, the platform will accept and decode the tracker messages and surface them in Plaspy dashboards and alerts.

- Device sends periodic position updates over GPRS/DATA to d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker can use UDP or TCP transport depending on the configuration selected on the device.
- RS-485 sensor telemetry and pulse/frequency inputs are forwarded in the device messages so Plaspy receives fuel and event data.
- Plaspy automatically detects the tracker protocol and maps the incoming data for visibility and reporting.
- Event reporting such as ignition, digital inputs, and buffered logs are transmitted to the shared Plaspy endpoint for analysis.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software provided by OKB Tehnoavtomatika for the MTA-Glonass.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device to use port 8888 for reporting.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure APN and cellular parameters so the tracker can establish a GPRS or DATA connection.
6. Apply or save the configuration on the tracker and perform any required reboot or restart of the unit.
7. Validate that the device reports to Plaspy by checking the Plaspy UI for the unit or watching for inbound messages on the server side.

## Example Configuration Commands

The MTA-Glonass may be configured with a vendor tool, serial interface, or SMS commands depending on firmware and regional tooling. Exact commands and syntax vary by manufacturer software and firmware version, so refer to OKB Tehnoavtomatika documentation for the precise command set for your unit.

If your installation uses SMS configuration or a serial configuration tool supplied by OKB Tehnoavtomatika, use those official resources to enter the server d.plaspy.com or 54.85.159.138 and set port 8888 plus transport UDP or TCP as required. Do not rely on third party command lists unless they are verified against the device firmware version.

## Configuration Notes

- Firmware differences may change configuration menu names or command syntax; always check the device firmware version and the official config guide.
- Choose UDP for lower overhead reporting or TCP if you require confirmed delivery and your firmware explicitly supports it; Plaspy supports either transport.
- Port 8888 is used for all Plaspy devices so you do not need device-specific port assignments.
- APN and mobile data settings are required for GPRS/DATA reporting; ensure APN credentials are correct for the SIM in use.
- SMS can be an alternative transport for initial configuration on some units, but GPRS/DATA is the primary reporting channel for Plaspy compatibility.
- Verify RS-485 wiring and sensor addressing for Omnicomm or other compatible sensors before attempting to forward telemetry to Plaspy.

## Why Use Plaspy with This Configuration

Using the MTA-Glonass (ver.12-M RS-485) with Plaspy provides centralized visibility for GNSS location, wired RS-485 sensor telemetry and vehicle event data. Plaspy’s shared server endpoint simplifies device onboarding because the same port and domain settings apply across supported trackers and the platform automatically detects the tracker protocol for decoding.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details on the official OKB Tehnoavtomatika website http://www.okb-ta.ru/ as setup steps and firmware capabilities can change over time.
