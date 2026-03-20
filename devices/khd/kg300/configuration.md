---
slug: /khd/kg300/configuration
id: kg300-configuration
sidebar_label: Configuration
title: KHD - KG300 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the KHD KG300 tracker for use with Plaspy with shared server settings and a practical setup workflow
keywords:
  - KHD KG300 configuration
  - KHD KG300 setup
  - KG300 Plaspy setup
  - KG300 server configuration
  - KHD GPS tracker configuration
  - KG300 GPRS setup
  - vehicle tracking KG300
  - KG300 tracker Plaspy
  - Plaspy tracker configuration
  - KG300 GPS platform setup
---

# KHD - KG300 Configuration

This page documents the public configuration context for using the KHD KG300 tracker with the Plaspy platform. It focuses on the server information and general setup workflow needed to point a KG300 at Plaspy so the device can report location, alerts, and scheduled data to the platform. The guidance here uses only public information and practical steps typical for integrating GNSS trackers with backend services.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify integration. Manufacturer configuration steps can vary by KG300 firmware, hardware revision, installation type, and tools used by vendors or installers, so always cross check against the device manual and KHD resources when applying settings.

## Configuration Overview

This section explains the practical goals when configuring a KG300 for Plaspy. The main objective is to prepare the tracker to communicate reliably with the Plaspy backend so device data appears in the Plaspy platform and alerts are delivered as expected.

- Configure the device to report to Plaspy using the shared Plaspy server endpoint and port.
- Ensure mobile network connectivity and correct APN or SIM settings so GPRS/GSM reporting works.
- Select the transport mode required by the device (UDP or TCP) and set the port to match Plaspy settings.
- Validate the device is sending regular position or event reports and that those reports are visible in Plaspy.
- Verify event reporting such as emergency alerts and geo fence triggers are received by the platform.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the KG300 to report to Plaspy. Plaspy uses the same port for all supported devices and performs automatic protocol detection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept reports from many device types

## Typical Requirements Before Setup

- Power the KG300 and confirm the device completes its startup sequence according to KHD documentation.
- Active SIM card with data enabled and sufficient credit or a data plan for GPRS reporting.
- Correct APN and any required SIM authentication credentials supplied by the mobile operator.
- Access to the official KHD configuration method such as the manufacturer PC tool, mobile app, or SMS command set.
- A way to read device status and logs after configuration, either via the KHD tool or by checking reports arriving in Plaspy.
- Knowledge of the device firmware version and any vendor customization that could affect command syntax or menu options.

## How This Tracker Connects to Plaspy

When the KG300 is configured for Plaspy it will use the GPRS/GSM network to send its position and event reports to the shared Plaspy endpoint and port. Plaspy receives these messages and associates them with the correct account or device record based on the device identification in the report.

- The KG300 sends data to d.plaspy.com or 54.85.159.138 using port 8888.
- Transport can be UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the protocol and parses incoming tracker messages.
- Event reporting such as emergency alerts, geo fence crossings, and scheduled reports are forwarded to the platform for monitoring and alerts.
- Once connected, device visibility and reporting status can be validated in Plaspy.

## Common Configuration Workflow

1. Access the official KHD configuration method or software as documented by the manufacturer.
2. Locate the server or APN settings section in the device configuration tool or SMS command list.
3. Enter d.plaspy.com or 54.85.159.138 as the server address in the device settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure the device APN and any required SIM credentials so the tracker can establish a GPRS connection.
6. Apply or save the configuration and follow any manufacturer guidance for committing settings.
7. Restart the device if the KHD procedure requires a reboot for network settings to take effect.
8. Validate that the KG300 is reporting to Plaspy by checking incoming messages and device status in the Plaspy platform.

## Example Configuration Commands

The KG300 supports configuration via manufacturer tools and SMS commands, but exact commands and syntax vary by firmware and vendor customization. Because model specific command sets are controlled by KHD, the public configuration approach is to use the official KHD software or documented SMS commands from the KG300 manual.

If you require the device SMS command set or direct command examples, refer to the KHD user manual or the configuration tool provided by KHD. Plaspy requires the device to be pointed to d.plaspy.com or 54.85.159.138 on port 8888 and to use UDP or TCP as configured by the device.

## Configuration Notes

- Firmware differences and vendor customizations can change the exact menu names, SMS commands, or tool options used to set server and APN values.
- TCP may be preferred where reliable delivery is required, while UDP can be used for lower overhead; confirm with KHD documentation and operational needs.
- SMS based configuration can be useful when the device is not yet able to use GPRS, but SMS command syntax varies by firmware.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol on incoming connections.
- Always confirm APN, SIM credentials, and network registration status before validating platform connectivity.

## Why Use Plaspy with This Configuration

Using the KHD KG300 with Plaspy gives organizations a straightforward route to capture vehicle positions, alerts, and scheduled telemetry on a single shared backend endpoint. The combination of KG300 GPRS/GSM reporting and Plaspy automatic protocol detection simplifies integration and reduces the need to tailor unique server configurations per tracker model.

To learn more about Plaspy and how it supports device integrations like the KG300 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation instructions always verify current details on the manufacturer website http://www.khd.hk. Device setup methods and firmware behavior can change over time so consult manufacturer documentation when applying configuration steps.
