---
slug: /arknav/at_9000/configuration
id: at_9000-configuration
sidebar_label: Configuration
title: ArkNav - AT-9000 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure ArkNav AT-9000 for use with Plaspy including required server settings and practical setup workflow
keywords:
  - ArkNav AT-9000 configuration
  - AT-9000 setup
  - ArkNav tracker configuration
  - AT-9000 Plaspy configuration
  - GPS tracker setup guide
  - container tracker configuration
  - Plaspy server settings
  - asset tracking AT-9000
  - AT-9000 installation guide
  - long operation tracker setup
---

# ArkNav - AT-9000 Configuration

This page documents the public configuration context for using the ArkNav AT-9000 with Plaspy. It summarizes the shared server settings Plaspy requires, describes typical prerequisites, and outlines a practical workflow to configure the AT-9000 so it can report position and event telemetry to the Plaspy platform. The guidance here is intended for technical users preparing the device for integration with Plaspy and complements the manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The AT-9000 is a rugged, long operation container tracker with AGPS and cell-based fallback, a removable battery, SMS and call retrieval options, and a USB to serial interface that can be used during field configuration.

## Configuration Overview

Preparing an AT-9000 for Plaspy integration focuses on ensuring reliable cellular connectivity, setting the device to report to the Plaspy endpoint, and validating that telemetry appears in the platform. The items below describe the practical goals of the configuration process.

- Configure the device to send data to the Plaspy server endpoint so location and event reports are delivered.
- Ensure the device has a valid SIM and APN settings so cellular sessions can be established for AGPS and telemetry uploads.
- Select the transport mode (UDP or TCP) and set the device to use port 8888 which Plaspy uses for all devices.
- Apply and save the configuration, restart the tracker if required, and confirm the device is reporting to Plaspy.
- Validate movement and timer-driven reporting profiles to balance battery life and reporting frequency for long deployments.

## Plaspy Server Settings

- Server domain name d.plaspy.com
- Server IP address 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged or installed battery and the device powered on for configuration and testing.
- Active SIM card with a data plan and correct APN settings for the cellular operator used in the deployment.
- Access to the official ArkNav configuration method such as the Prolific USB to serial cable and manufacturer configuration software or documented SMS commands.
- Manufacturer documentation or vendor-provided instructions for the AT-9000 firmware and any vendor tools used to write settings.
- A Plaspy account or integration contact to verify the device shows as connected after provisioning.
- Basic tools for field verification such as a laptop with the configuration cable and a temporary cellular coverage check.

## How This Tracker Connects to Plaspy

The AT-9000 reports AGPS and cell-derived positions to the Plaspy endpoint so location and event data become visible in the Plaspy platform. Configure the device to target the shared Plaspy server endpoint and port, and the platform will detect and decode the tracker protocol automatically.

- The device is set to report to d.plaspy.com or 54.85.159.138 using port 8888.
- Choose UDP or TCP on the device if the firmware requires a transport selection; Plaspy accepts both.
- Location updates and movement events are sent to the Plaspy server where they become available for real-time monitoring and historical playback.
- Local data stored in the AT-9000 is uploaded to the Plaspy endpoint when connectivity is reestablished.
- SMS and phone-call retrieval features on the AT-9000 remain useful for ad hoc location requests but do not replace the standard server reporting to d.plaspy.com.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software using the Prolific USB to serial cable or the vendor tools recommended for the AT-9000.
2. Configure the cellular APN and ensure the SIM card is active so the device can open data sessions.
3. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires transport selection and save the setting.
6. Apply or save the configuration to the device and restart the tracker if the firmware requires a reboot to apply changes.
7. Validate that the AT-9000 is reporting to Plaspy and confirm visibility of position and event data in the platform.

## Example Configuration Commands

The AT-9000 supports configuration via the manufacturer USB to serial interface and via SMS or phone-call commands depending on installed firmware. Exact command syntax and available SMS commands vary by firmware and vendor toolset, so refer to ArkNav documentation or the vendor provisioning guide for exact strings and order. When using ArkNav tools, set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, then select UDP or TCP if required and save the profile.

If you require command examples for a specific firmware revision, consult the ArkNav configuration manual or your device vendor for the authoritative command list and sample sequences.

## Configuration Notes

- Firmware differences can change the exact steps, menu locations, or SMS command syntax for configuring server and transport settings.
- TCP and UDP transport modes behave differently in terms of session handling and reliability; choose the transport the device firmware handles best and verify operation.
- Confirm APN settings for the installed SIM before testing connectivity so the device can establish a data session to send telemetry to d.plaspy.com.
- Local flash storage on the AT-9000 will hold data during coverage gaps and upload to the Plaspy endpoint when connectivity resumes.
- Keep a copy of the device configuration profile and firmware version used during setup to simplify field updates or troubleshooting.

## Why Use Plaspy with This Configuration

Using the ArkNav AT-9000 with Plaspy provides a practical approach to long-term container and asset monitoring where battery life and ruggedness are priorities. With shared Plaspy server settings and automatic protocol detection, once the AT-9000 is configured to report to d.plaspy.com on port 8888 it becomes straightforward to integrate location and event telemetry into fleet monitoring, geofence alerts, and historical reporting workflows.

To learn more about Plaspy and how it can support your AT-9000 deployments visit https://www.plaspy.com. For the latest device specific configuration instructions, firmware notes, and detailed command syntax verify information with the device manufacturer at https://www.arknavgps.com.tw/. Manufacturer specifications and setup methods can change over time so always confirm current details with ArkNav before large scale deployment.
