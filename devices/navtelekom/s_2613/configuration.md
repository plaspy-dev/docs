---
slug: /navtelekom/s_2613/configuration
id: s_2613-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2613 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom СИГНАЛ S-2613 with Plaspy server settings and practical setup steps
keywords:
  - Navtelekom
  - SIGNAL S-2613 configuration
  - Navtelekom S-2613 setup
  - S-2613 server configuration
  - S-2613 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - Navtelekom GPS tracker
  - S-2613 installation guide
---

# Navtelekom - СИГНАЛ S-2613 Configuration

This page collects public configuration guidance for integrating the Navtelekom СИГНАЛ S-2613 tracker with the Plaspy platform. It is intended to help technical installers and fleet administrators prepare the device to communicate with Plaspy using the publicly available server settings and common manufacturer configuration methods.

Plaspy uses shared server settings across supported devices and performs automatic protocol detection for incoming connections. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools such as NTC Configurator or DRC, so follow this page for the Plaspy side details and consult the manufacturer for device specific procedures.

## Configuration Overview

This configuration process prepares the S-2613 to send position and telemetry to Plaspy so devices appear in your fleet dashboard and generate events. The goal is to configure the tracker network endpoint, confirm transport and connectivity, and validate that reports reach the shared Plaspy server.

- Configure the tracker to report to the Plaspy server endpoint and confirm transport settings.
- Ensure the device has power, antennas, and a working SIM if required for GSM connectivity.
- Validate that the tracker reaches the Plaspy endpoint and that Plaspy shows device telemetry.
- Save and apply configuration on the device using the manufacturer tool and, if required, restart the tracker.
- Confirm event reporting such as digital input changes and basic telemetry are visible in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the tracker or the manufacturer configuration tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Note that Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection to simplify per-device setup.

## Typical Requirements Before Setup

- Confirm the tracker is powered and has required external GNSS and GSM antennas connected.
- Install and activate a compatible 2G SIM card if GSM connectivity is required in your region.
- Access to the manufacturer configuration tool such as NTC Configurator for local setup or DRC for remote management.
- A Plaspy account and appropriate permissions to view newly connected devices in your organization.
- Physical or remote access to the device for applying settings and performing a restart if required.

## How This Tracker Connects to Plaspy

The SIGNAL S-2613 is configured to send GNSS coordinates and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest positional data, events, and device state. Plaspy captures incoming messages, decodes the protocol automatically, and displays data in fleet dashboards and reports.

- The tracker sends position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on device firmware and installer preference.
- Plaspy auto-detects the tracker protocol so the server can accept the device messages without per-device protocol registration.
- Plaspy records telemetry and event reports such as digital input changes and analog telemetry when provided by the device.
- Successful connection and reporting are validated by viewing the device in Plaspy and checking recent message activity.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as NTC Configurator or the vendor remote management tool.
2. Confirm the device has a working SIM and antennas installed, and that power is stable.
3. Enter the Plaspy server address using d.plaspy.com or 54.85.159.138 in the server/host field.
4. Set the server port to 8888 as the destination port for telemetry.
5. Choose UDP or TCP for the transport option if the device requires a transport selection.
6. Apply or save the configuration within the manufacturer tool and perform any required device restart.
7. Validate that the device reports to Plaspy by checking the device status and recent messages in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and formats depend on the manufacturer tool, firmware, and the method used for configuration (USB, serial, SMS, or software). Because Navtelekom provides configuration via NTC Configurator and remote DRC tools, follow the manufacturer documentation and user interface for entering the server host and port values. If you use an SMS based method provided by Navtelekom for basic settings, follow the SMS syntax published by the manufacturer.

## Configuration Notes

- Firmware differences can change available menu labels and transport options; verify the device firmware version before following menu-specific steps.
- Choose TCP or UDP based on network reliability and your preferences; both are supported by Plaspy on port 8888 and Plaspy will auto-detect the protocol.
- Because the S-2613 uses a 2G modem, confirm regional GSM 2G coverage and SIM provisioning before deployment.
- Use the official NTC Configurator or DRC where possible to avoid syntax errors and to preserve device settings and firmware compatibility.
- Always confirm the server host and port are entered exactly as d.plaspy.com or 54.85.159.138 and that port 8888 is saved for the device to report to Plaspy.

## Why Use Plaspy with This Configuration

Using the Navtelekom СИГНАЛ S-2613 with Plaspy provides a straightforward path to integrate GNSS position, inputs, and telemetry into a managed fleet platform. Plaspy ingests the device messages sent to the shared server endpoint, applies automatic protocol detection, and surfaces location, events, and basic telemetry for operational monitoring and alerting.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer tools consult the official Navtelekom documentation at https://www.navtelecom.ru/ as device configuration methods and firmware behavior can change over time.
