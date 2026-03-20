---
slug: /careu/ut1/configuration
id: ut1-configuration
sidebar_label: Configuration
title: CAREU - UT1 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the CAREU UT1 tracker for use with Plaspy using shared server settings and practical setup steps
keywords:
  - CAREU UT1 configuration
  - CAREU UT1 setup
  - CAREU UT1 Plaspy
  - CAREU tracker configuration
  - UT1 GPS tracker setup
  - UT1 server configuration
  - UT1 fleet tracking setup
  - Plaspy device configuration
  - Plaspy tracker setup
  - GPS tracker Plaspy integration
---

# CAREU - UT1 Configuration

This page documents the public configuration context for using the CAREU UT1 GPS tracker with the Plaspy platform. It summarizes the practical server settings, preparatory requirements, and the typical steps you or an installer will follow to point a UT1 device to Plaspy for live tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps for the UT1 can vary by firmware version, hardware revision, installation type, and the vendor tool used for configuration, so this guide focuses on the public Plaspy values and practical workflow while recommending verification with the device maker documentation.

## Configuration Overview

Setting up a CAREU UT1 for Plaspy consists of preparing the device, configuring its network reporting endpoint to the Plaspy server, and validating that position and telemetry arrive in the Plaspy platform. The goal is to reliably stream location, alarms, and sensor data into Plaspy while preserving device autonomy and remote management capabilities.

- Enter Plaspy server settings on the UT1 using the manufacturer configuration tool or supported SMS/FTP methods.
- Select the transport protocol required by the device firmware and set the shared Plaspy port.
- Verify cellular connectivity and APN settings so the UT1 can reach the Plaspy endpoint over LTE with fallback as needed.
- Apply and save configuration changes, then confirm the tracker appears and reports in Plaspy.
- Use Plaspy dashboards and alerts to validate telemetry, geofence events, battery and tamper alarms, and remote command functions.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- All devices in Plaspy use the same port 8888
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A powered CAREU UT1 device with battery charged or external power connected.
- Active SIM card and cellular data service appropriate for the UT1 LTE Cat 1 device and regional networks.
- Access to the official CAREU configuration method or software such as the manufacturer web tool, desktop utility, or SMS command set.
- APN and SIM operator settings verified so the UT1 can establish data sessions for FTP, SMS, or socket connections.
- A Plaspy account or administrative access to validate device arrival and telemetry once configuration is applied.
- Basic understanding of the device firmware version and any vendor specific setup limitations.

## How This Tracker Connects to Plaspy

When configured, the CAREU UT1 reports position fixes, alarms, and sensor telemetry to the shared Plaspy endpoint so fleet managers and security teams can view live updates and historical logs. The UT1 uses cellular connectivity to establish a socket or datagram session to the Plaspy server and transmits event and location payloads according to its firmware protocol, which Plaspy will detect automatically.

- The UT1 is pointed at d.plaspy.com or 54.85.159.138 and sends data to port 8888.
- Transport may be UDP or TCP depending on the UT1 firmware and configuration choice.
- Plaspy automatically detects the device protocol and begins parsing incoming telemetry.
- Location, accelerometer events, geofence alarms, power and tamper notifications, and sensor data are forwarded into Plaspy dashboards.
- Remote configuration and FOTA actions are typically managed via the manufacturer system and may use FTP or platform side tooling to manage firmware.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the manufacturer.
2. In the device server or reporting settings enter the Plaspy endpoint as either d.plaspy.com or 54.85.159.138.
3. Set the device reporting port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Save or apply the configuration in the device tool and confirm settings were written.
6. Restart the device if the manufacturer instructions require a reboot to enable new reporting settings.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for incoming telemetry and confirming expected events.

## Example Configuration Commands

The UT1 supports multiple configuration methods depending on firmware and vendor tools. Exact commands vary by firmware release and the CAREU configuration utility. If your deployment uses SMS or CLI style commands provided by CAREU, follow the official command references from the manufacturer. In general, you will supply the Plaspy server domain or IP and the shared port 8888 using the tool or command set your device supports.

If you require SMS or console command examples consult the CAREU UT1 user manual or the manufacturer support resources for the correct syntax for your firmware version. Plaspy expects devices to target d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP.

## Configuration Notes

- Firmware differences can change the exact configuration parameter names and available transports. Confirm parameter names in the CAREU UT1 manual for your firmware revision.
- TCP and UDP behave differently on lossy networks. Test both transports if your first choice does not produce consistent uploads; Plaspy supports and will detect either.
- All Plaspy devices share port 8888 so using the domain d.plaspy.com or the IP 54.85.159.138 with port 8888 is sufficient for most setups.
- Verify APN and SIM data plan settings before attempting to connect; cellular session failures are a common cause of data not reaching Plaspy.
- Remote configuration and FOTA for the UT1 are typically managed via FTP or the manufacturer backend. Coordinate FOTA steps with operations teams to avoid unintended service interruptions.

## Why Use Plaspy with This Configuration

Using the CAREU UT1 with Plaspy provides a practical, rugged solution for organizations that need continuous visibility and actionable telemetry across heavy duty fleets and assets. The UT1 hardware and logging capabilities combined with Plaspy ingestion give teams reliable tracking, event alerting, and historical analysis to support anti theft, maintenance planning, and operational oversight.

To learn more about Plaspy and how it integrates with devices like the CAREU UT1 visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the official CAREU site https://www.systech-iot.com/ as vendor documentation and firmware changes can affect exact setup steps.
