---
slug: /itriangle/at101_4g/configuration
id: at101_4g-configuration
sidebar_label: Configuration
title: iTriangle - AT101 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iTriangle AT101 4G setup with Plaspy including server and workflow details
keywords:
  - iTriangle AT101 4G configuration
  - iTriangle AT101 4G setup
  - AT101 4G Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - asset tracking AT101 4G
  - LTE GPS tracker setup
  - Plaspy server settings
  - tracker integration guide
---

# iTriangle - AT101 4G Configuration

This page covers the public configuration context for using the iTriangle AT101 4G tracker with Plaspy. It summarizes the shared server settings used by Plaspy, explains the common workflow for preparing and registering the device, and highlights the typical prerequisites and verification steps using manufacturer tools or standard configuration interfaces.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The AT101 4G is a cordless asset tracker with a large internal battery, magnetic mount, multi-constellation GNSS, LTE/Cat 1 connectivity with GSM fallback, BLE 4.0, and OTA/FOTA capabilities; those features affect installation choices but do not change the shared Plaspy server endpoint and port required for reporting.

## Configuration Overview

Preparing an AT101 4G for Plaspy centers on configuring the device to send location and event data to Plaspy and validating that the device successfully reports to the platform. The process is primarily about setting the server endpoint and transport, ensuring mobile connectivity, and confirming that telemetry arrives on Plaspy.

- Configure the device to report to Plaspy using the server domain d.plaspy.com or the server IP 54.85.159.138 and port 8888.
- Select the transport protocol the device supports, UDP or TCP, and confirm Plaspy will accept either since Plaspy automatically detects the tracker protocol.
- Verify the AT101 4G has an active cellular connection and sufficient battery to complete configuration and initial reporting.
- Use the official iTriangle configuration method or software to apply settings and, if available, perform OTA/FOTA updates before deploying.
- Confirm on Plaspy that the tracker is visible and sending expected location and event telemetry such as motion, geofence, and tamper alerts.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported by the device and accepted by Plaspy  
- Protocol detection: Plaspy automatically detects the tracker protocol so the same port is used for all devices

## Typical Requirements Before Setup

- A charged AT101 4G with sufficient battery for configuration and initial reporting
- An active nano SIM with data service and network coverage compatible with the device
- Access to the iTriangle configuration method or management tool provided by the manufacturer
- Basic device identity information such as IMEI or serial to register or identify the unit in Plaspy
- A location with reliable cellular signal for first-time connectivity and OTA update checks
- Administrator access to Plaspy to verify device visibility after configuration

## How This Tracker Connects to Plaspy

The AT101 4G sends GNSS-derived location and sensor telemetry over the cellular network to the shared Plaspy server endpoint and port. Once configured to report to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP, Plaspy will ingest location updates, motion events, geofence triggers, tamper alerts, and other supported telemetry for display and rules processing.

- The device is pointed to d.plaspy.com or 54.85.159.138 and port 8888 to reach Plaspy
- Choose UDP or TCP if the device configuration requires a transport selection
- Plaspy automatically identifies the device protocol and standardizes ingestion across devices
- Location, motion, geofence, and tamper events are forwarded to Plaspy for live maps and alerts
- OTA/FOTA managed devices can receive firmware and configuration updates as part of ongoing management workflows

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software as provided by the manufacturer.
2. Locate the network or server reporting section in the device settings.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 for the server address.
4. Set the server port to 8888.
5. Choose UDP or TCP if your device requires transport selection.
6. Apply or save the configuration using the manufacturer tool or device interface.
7. Restart the device if required by the configuration tool or firmware.
8. Validate that the device reports to Plaspy and appears in your Plaspy account with expected telemetry.

## Example Configuration Commands

The exact configuration commands and interface vary by manufacturer tool, firmware, and whether you use SMS, a USB configuration tool, or a web/mobile application. Many iTriangle tools and firmware utilities will request the same Plaspy values: server d.plaspy.com or 54.85.159.138, port 8888, and a transport selection of UDP or TCP. Because model firmware and tooling differ, follow the iTriangle instructions for issuing configuration commands or applying settings through their official utility.

## Configuration Notes

- Firmware differences and hardware revisions can change the location of server settings or require different configuration steps; always check the iTriangle tooltips and release notes.
- Choose UDP or TCP based on manufacturer guidance and network conditions; Plaspy accepts either and will auto-detect the protocol.
- If the device supports OTA/FOTA, consider updating firmware before mass deployment to ensure consistent behavior.
- Validate device identity (IMEI or serial) against Plaspy records to avoid duplicate entries or misidentified units.
- For cordless installations, confirm battery charge levels and a strategy for periodic checks to avoid unexpected downtime.

## Why Use Plaspy with This Configuration

Using the AT101 4G with Plaspy gives organizations centralized visibility for asset tracking, event alerts, and historical route analysis while relying on a single, shared server endpoint and port. The AT101’s long battery life, multi-constellation GNSS, motion and tamper sensors, and OTA capabilities make it suitable for low-touch deployments where continuous telemetry and remote management through Plaspy reduce field visits and improve operational oversight.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device-specific setup steps, firmware details, and manufacturer tools, verify the latest information on the official iTriangle website https://www.itriangle.net/.
