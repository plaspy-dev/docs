---
slug: /autofon/omega_maiak/configuration
id: omega_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Омега-Маяк+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon Омега-Маяк+ with Plaspy server settings and setup workflow
keywords:
  - AutoFon Омега-Маяк+ configuration
  - AutoFon Omega Mayak+ setup
  - AutoFon tracker Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - Plaspy server settings
  - tracker server configuration
  - Omega Maiak plus setup guide
  - AutoFon configuration for Plaspy
---

# AutoFon - Омега-Маяк+ Configuration

This page provides the public configuration context for using the AutoFon Омега-Маяк+ tracker with Plaspy. It explains the shared server settings Plaspy requires, how the tracker typically connects to a monitoring server, and practical steps you can follow to prepare the device for visibility in Plaspy. The guidance here is focused on public, nonproprietary setup information useful for integrators and installers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and the vendor configuration tool you use. Refer to AutoFon documentation for device specific commands and the latest firmware behavior.

## Configuration Overview

Preparing the Омега-Маяк+ for use with Plaspy is primarily about enabling reliable GPRS reporting to Plaspy’s shared server endpoint and confirming the device is visible in the platform. The tracker also supports SMS reporting and local features such as BLE presence detection and a built in accelerometer, which are configured separately as needed.

- Configure the device to send GPRS telemetry to the Plaspy server endpoint.
- Ensure the tracker has an active 2G GSM service and correct operator APN settings.
- Choose the transport protocol required by your device firmware (UDP or TCP) and set the port to match Plaspy.
- Validate that the device registers with Plaspy and appears in the platform monitoring list.
- Keep a copy of any supplier configuration instructions for firmware specific commands or utilities.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported; select the transport your tracker firmware requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public, shared settings used to route device telemetry into Plaspy. Use either the domain d.plaspy.com or the IP 54.85.159.138 and set port 8888 on the device configuration side.

## Typical Requirements Before Setup

- A charged and functional AutoFon Омега-Маяк+ with working cellular radio
- An active SIM card with 2G GSM voice and data (GPRS) service and a configured APN from the mobile operator
- Access to the official AutoFon configuration method or software (Micro USB configuration tool, SMS commands, or vendor utility)
- A PC or mobile tool if the device requires USB or BLE for initial setup
- Network coverage at the installation location for reliable GPRS reporting
- Credentials or instructions from your installation provider for any device specific commands

## How This Tracker Connects to Plaspy

The Омега-Маяк+ sends its recorded events and coordinates over 2G GPRS to a monitoring server, or alternatively can send notifications via SMS to configured numbers. For integration with Plaspy, the device is configured to report to the shared Plaspy server endpoint and port so the platform can ingest telemetry and render device location and events.

- The tracker is set to use GPRS to push telemetry to d.plaspy.com or 54.85.159.138
- Port 8888 is used for all Plaspy devices and must be set on the tracker
- Choose UDP or TCP depending on the tracker firmware and configuration tool
- Plaspy automatically detects the tracker protocol when telemetry arrives
- Once reporting, Plaspy will show location, events, and connectivity status in the platform

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the Омега-Маяк+ (Micro USB configuration utility, vendor application, or documented SMS commands).
2. In the server/network section enter the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. If the device requires a transport selection, choose UDP or TCP according to the tracker firmware or installer guidance.
5. Enter any required APN and network credentials supplied by the mobile operator so GPRS connectivity is available.
6. Apply or save the configuration and, if required by the device, restart or power cycle the tracker.
7. Validate that the device reports to Plaspy and appears online in the platform using the configured server address and port.

## Example Configuration Commands

The exact configuration commands and syntax vary by AutoFon firmware and the configuration tool you use. AutoFon devices often provide multiple methods for configuration such as a PC configuration utility over Micro USB, BLE assisted tools, or SMS commands documented by the manufacturer. Because commands differ by firmware, consult the official AutoFon documentation or the configuration utility shipped with the device for the precise command set.

If you have AutoFon command examples from your device manual or vendor, use the vendor tool to enter the Plaspy server values:
- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Note: preserve the exact order and syntax from AutoFon documentation when applying any SMS or serial commands.

## Configuration Notes

- Firmware differences can change command syntax and available menus; always verify the tracker firmware version before making configuration changes.
- TCP and UDP are both supported for reporting to Plaspy; choose the transport that matches your device firmware and network conditions.
- The device requires correct APN settings for GPRS data; confirm APN details with the mobile operator and enter them via the official AutoFon configuration method.
- Use the Micro USB connector or the manufacturer tool for more complex settings; SMS configuration may be available for basic parameters depending on firmware.
- Keep a record of any SMS commands or configuration backups so you can restore settings after firmware updates or device replacement.

## Why Use Plaspy with This Configuration

Using the AutoFon Омега-Маяк+ with Plaspy lets organizations centralize location and event data from a compact GPRS tracker into a single monitoring platform. This configuration supports device visibility, event reporting, and operational monitoring for vehicle protection, asset tracking, and personal safety use cases where reliable GPRS reporting is required.

To learn more about Plaspy and how it handles device telemetry, visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer setup instructions, verify details on the official AutoFon site https://www.autofon.ru/ as manufacturer specifications and setup methods can change over time.
