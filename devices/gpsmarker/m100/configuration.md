---
slug: /gpsmarker/m100/configuration
id: m100-configuration
sidebar_label: Configuration
title: GPSMarker - M100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GPSMarker M100 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - GPSMarker M100 configuration
  - GPSMarker M100 setup
  - M100 tracker Plaspy
  - GPS tracker configuration
  - GPSMarker server settings
  - vehicle tracking setup
  - GPRS tracker configuration
  - Plaspy tracker configuration
  - M100 GPS platform setup
  - GPSMarker configuration guide
---

# GPSMarker - M100 Configuration

This page documents the public configuration context for using the GPSMarker M100 tracker with Plaspy. It summarizes the practical server settings and recommended steps to prepare the M100 for visibility in a Plaspy deployment while relying on publicly available device details. Use this guidance together with the GPSMarker official manual for device specific procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps, available configuration tools, and firmware behavior can vary by hardware revision, firmware version, installation type, and vendor tools, so always confirm device specific steps with the manufacturer documentation.

## Configuration Overview

This configuration process prepares the GPSMarker M100 to send its telemetry to Plaspy and makes the device visible in the Plaspy platform. The M100 supports an open GPRS protocol and offers onboard sensors and long battery life, which is helpful for many asset tracking use cases. Use the steps below to set the server endpoint, transport, and verify connectivity.

- Configure the M100 to report to the Plaspy server endpoint so location and event data are forwarded to Plaspy.
- Select the transport method supported by the device (UDP or TCP) and set the required port.
- Verify device connectivity over GPRS or the manufacturer supported network method before finalizing.
- Apply firmware updates or use the vendor configuration cable if needed to ensure current behavior.
- Confirm the device appears in Plaspy and reports expected position updates and events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport the M100 configuration tool requires
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Access to the GPSMarker M100 official configuration method such as vendor software, SMS commands, or USB cable for firmware and settings
- A powered and functional M100 device with sufficient battery or external power for configuration and testing
- An active SIM card and mobile data plan that supports GPRS if using the device cellular reporting option
- Network coverage at the device location to allow GPRS connections to the Plaspy server
- Basic Plaspy account access or platform credentials to verify the device appears and reports correctly
- Manufacturer documentation or release notes for the M100 to check firmware specific behavior

## How This Tracker Connects to Plaspy

The GPSMarker M100 is configured to send its telemetry to the shared Plaspy endpoint and port so Plaspy can ingest location and event messages and present them in the platform. Plaspy’s automatic protocol detection reduces the need to select a specific protocol string in many cases, but transport choice (UDP or TCP) is still required on some devices.

- The M100 reports position and event messages to the Plaspy server endpoint d.plaspy.com or directly to IP 54.85.159.138
- Reporting is performed over port 8888 which Plaspy uses for all supported devices
- Transport can be configured as UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when the device connects to the endpoint
- Once connected, Plaspy receives position updates and sensor events for visibility and monitoring

## Common Configuration Workflow

1. Access the official GPSMarker M100 configuration method provided by the manufacturer such as vendor software, SMS command set, or USB configuration cable.
2. In the device settings, enter d.plaspy.com or alternatively the server IP 54.85.159.138 as the reporting endpoint.
3. Set the reporting port to 8888, matching the Plaspy shared port policy.
4. If the device requires a transport selection, choose UDP or TCP according to your preference or network requirements.
5. Apply or save the configuration settings on the device using the manufacturer tool or command procedure.
6. Restart the M100 if the configuration tool or manual indicates that a reboot is required to apply changes.
7. Validate that the device is reporting to Plaspy by checking for incoming position updates and events in your Plaspy account.

## Example Configuration Commands

The exact configuration commands or steps vary by GPSMarker firmware and the vendor configuration method. GPSMarker provides several ways to configure devices such as USB cable tools, SMS commands, or dedicated configuration software. Because manufacturer tools and command sets change, consult the GPSMarker M100 manual for the exact syntax and sequence required for your firmware version.

If your device firmware supports SMS setup, the vendor manual will list the SMS command templates and placeholders such as APN values. If you are using a USB cable or configuration application, follow the GUI steps to set the server to d.plaspy.com or 54.85.159.138 and port 8888, then save and reboot the device.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax; always check the M100 release notes before applying settings.
- Choose UDP or TCP based on network reliability and your monitoring needs; UDP is often lighter while TCP can provide connection reliability at the cost of overhead.
- Plaspy automatically detects the tracker protocol, but the device must send to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy to ingest data.
- If using SMS based configuration, retain placeholders such as APN credentials and replace them with your operator values when instructed.
- Keep a record of changes and consider applying firmware updates via the vendor cable if recommended for improved interoperability.

## Why Use Plaspy with This Configuration

Using the GPSMarker M100 with Plaspy gives organizations a straightforward way to centralize location and event data from this device into an operational platform. The M100’s long battery life, onboard sensors, and open GPRS protocol make it a practical option for asset and vehicle tracking scenarios where periodic reporting and event alerts are important.

To learn more about Plaspy and how it handles device data ingestion and visualization visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and command references consult the GPSMarker official site at https://gpsmarker.ru/ as manufacturer details and setup steps can change over time.
