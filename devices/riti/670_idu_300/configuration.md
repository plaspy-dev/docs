---
slug: /riti/670_idu_300/configuration
id: 670_idu_300-configuration
sidebar_label: Configuration
title: Riti - 670 (IDU-300) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Riti Locator 670 IDU 300 when used with Plaspy server settings
keywords:
  - Riti 670 configuration
  - Riti 670 setup Plaspy
  - IDU 300 server configuration
  - Riti GPS tracker configuration
  - Plaspy tracker integration
  - GPS tracker server settings
  - fleet tracking setup
  - telematics device configuration
  - vehicle tracking platform setup
  - tracker protocol detection
---

# Riti - 670 (IDU-300) Configuration

This page covers the public configuration context for using the Riti Locator 670 IDU 300 with the Plaspy platform. It describes the shared server settings Plaspy requires, practical setup considerations, and the general workflow to prepare the tracker so it can forward GNSS and peripheral telemetry to Plaspy for live visibility and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the device protocol when the tracker connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as a practical guide and cross check device specific instructions from the manufacturer.

## Configuration Overview

Preparing the 670 for Plaspy is focused on enabling reliable uplink of GNSS positions and sensor telemetry to the platform and confirming the device appears in Plaspy. The process typically includes configuring the tracker server endpoint, ensuring cellular or network connectivity, and validating the uplink so that Plaspy can display live location and events.

- Configure the device to report to the Plaspy server endpoint and port so position and sensor data reach the platform.
- Verify cellular connectivity and APN settings so the unit can establish an IP session for data upload.
- Choose the transport protocol if the device requires a UDP or TCP selection and save the setting.
- Ensure periodic reporting frequency and peripheral inputs are enabled to support mileage, battery, and sensor telemetry in Plaspy.
- Confirm the unit is visible in Plaspy after configuration and that data flow resumes after any network interruptions.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device configuration options  
- Plaspy automatically detects the tracker protocol when the device connects  
- All devices in Plaspy use the same port which simplifies bulk deployments

## Typical Requirements Before Setup

- A powered and installed Locator 670 with access to the manufacturer configuration interface or software.  
- An active cellular data plan and a correctly provisioned SIM card for devices using mobile networks.  
- Correct APN values supplied by the mobile operator ready to enter into the device configuration where required.  
- Access to the official Riti configuration method or vendor tool for model IDU 300 to change server and transport settings.  
- A Plaspy account and the ability to register or identify devices on the Plaspy platform for monitoring and reporting.  
- Basic tools to restart the device after configuration and to view live reporting in Plaspy for validation.

## How This Tracker Connects to Plaspy

The Locator 670 forwards GNSS fixes and peripheral telemetry to the shared Plaspy server endpoint and port so Plaspy can provide live maps, events, and historical reports. Data is packaged on the device and uploaded over the cellular connection to the Plaspy endpoint where the platform automatically resolves the tracker protocol.

- GNSS position updates and per second mileage are sent to the Plaspy server endpoint for live tracking.  
- Battery voltage and analog sensor inputs are included in telemetry sent to Plaspy for alerts and diagnostics.  
- Peripheral events such as SOS, DVR, and external sensor triggers are forwarded as event messages to Plaspy.  
- Local data buffering stores records during connectivity loss and the unit uploads stored records to Plaspy when the connection recovers.  
- The tracker is configured to report to the shared Plaspy server endpoint and port to ensure consistent handling across devices.

## Common Configuration Workflow

1. Access the official Riti configuration method or software for the Locator 670 IDU 300 provided by the vendor or installer.  
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 into the server field.  
3. Set the communication port to 8888 which is the Plaspy port used for all supported devices.  
4. Choose UDP or TCP as the transport option if the device menu requires a transport selection.  
5. Configure APN or operator settings if the device needs cellular data access and ensure SIM is active.  
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.  
7. Validate that the device reports to Plaspy by checking live position updates and telemetry in the Plaspy platform.

## Example Configuration Commands

The Locator 670 IDU 300 may be configured using Riti provided software tools or via firmware commands. Exact commands and syntax vary by firmware version and the manufacturer configuration method. Because Riti provides multiple configuration mechanisms, follow the vendor supplied guide for the exact command format when modifying server and transport settings. If you use SMS or serial commands provided by Riti, preserve placeholders such as APN values and replace them with operator specific settings.

## Configuration Notes

- The Locator 670 is a discontinued 3G model so confirm network compatibility and lifecycle considerations with your operator prior to large scale deployment.  
- Firmware differences may change exact menu paths or command syntax for server, port, and transport settings. Always cross check the device firmware notes.  
- Choose UDP or TCP according to your local network and installer preference, but Plaspy will detect the tracker protocol automatically once the tracker connects.  
- Use the shared Plaspy port 8888 consistently across units to simplify provisioning and firewall configuration.  
- Local buffering and automatic uplink on reconnect are important for units installed in areas with intermittent coverage.

## Why Use Plaspy with This Configuration

Using the Riti Locator 670 IDU 300 with Plaspy gives fleets a straightforward way to send GNSS positions and multi sensor telemetry into a single platform for live visibility, alerts, and reporting. For legacy deployments where the IDU 300 remains in service, its frequent reporting, per second mileage, and peripheral support help maintain operational oversight and event driven workflows in Plaspy.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific setup details with the manufacturer at https://www.riti.com.tw/ since device firmware behavior and manufacturer instructions can change over time.
