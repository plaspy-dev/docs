---
slug: /cantrack/tk200am/configuration
id: tk200am-configuration
sidebar_label: Configuration
title: CanTrack - TK200AM Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack TK200AM integration with Plaspy including server settings and practical setup guidance
keywords:
  - CanTrack TK200AM configuration
  - CanTrack TK200AM setup
  - CanTrack TK200AM server configuration
  - TK200AM Plaspy integration
  - CanTrack GPS tracker configuration
  - Plaspy tracker setup
  - TK200AM GPS platform setup
  - CanTrack asset tracker configuration
  - TK200AM fleet tracking setup
  - Plaspy device configuration
---

# CanTrack - TK200AM Configuration

This page documents the public configuration context for using the CanTrack TK200AM with Plaspy. It covers the shared Plaspy server settings you will point the device at, the typical prerequisites to verify before configuration, and the high level workflow to get the TK200AM reporting to Plaspy for mapping, alerts and reporting. The guidance here is focused on public configuration facts and practical setup steps rather than bespoke installer procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data is received. Manufacturer side setup steps and available tools can vary by firmware version, hardware revision, installation type and vendor platform, so always cross reference the vendor documentation when you need device specific commands or advanced features.

## Configuration Overview

The goal of this configuration is to prepare the TK200AM to communicate reliably with Plaspy so location and telemetry appear in your Plaspy account. You will configure the device to use Plaspy's shared ingestion endpoint and validate connectivity from the device through the mobile network to the platform.

- Point the TK200AM to the Plaspy server endpoint so uplinks are routed to your Plaspy workspace.
- Ensure the device has a working SIM, correct APN and power to establish GSM GPRS connectivity.
- Choose the appropriate transport mode if the device requires a UDP or TCP selection for uplink.
- Save and apply settings on the device, then confirm the tracker is visible in Plaspy.
- Use the device vendor tool or mobile app for any device specific parameters such as reporting profile and tamper alarm enablement.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the TK200AM to report directly to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device configuration tool
- Plaspy automatically detects the tracker protocol so a single shared port is used for all supported devices

## Typical Requirements Before Setup

- A charged TK200AM with sufficient battery or a connected power source for initial configuration and testing.
- A valid SIM card with an active data plan and correct APN configured for GPRS connectivity over the mobile network.
- Mobile network coverage on the device location supporting GSM GPRS.
- Access to the manufacturer configuration method such as the CanTrack vendor tool, mobile app, or configuration interface provided with the device.
- A Plaspy account and any onboarding details needed to view the device once it reports to Plaspy.
- Knowledge of whether the device firmware requires explicit selection of UDP or TCP for uplink.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the TK200AM uses GSM GPRS to open an uplink to the Plaspy ingestion endpoint and sends position packets and device telemetry for platform ingestion. Plaspy uses the single shared port and automatic protocol detection to accept and parse the tracker messages.

- The tracker is configured to send packets to d.plaspy.com or 54.85.159.138 on port 8888.
- You may select UDP or TCP transport on the device if the firmware exposes that option.
- Plaspy automatically detects the tracker protocol from the incoming data so devices on the shared port are parsed correctly.
- Once packets arrive at Plaspy they are associated with your account and appear in dashboards, historical routes, and alerting workflows.
- Regular reporting and tamper alerts from the TK200AM enable monitoring and operational responses in Plaspy.

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as the vendor mobile app, web tool, or device configuration interface provided by the manufacturer.
2. In the device server or network settings enter the Plaspy endpoint using either d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 to match Plaspy ingestion for all devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration in the manufacturer tool or on the device itself.
6. Restart or power-cycle the device if required by the firmware to apply network changes.
7. Validate that the device is reporting to Plaspy by checking your Plaspy account for the new device feed and confirming recent position updates.

## Example Configuration Commands

The precise commands and syntax used to configure the TK200AM vary by the manufacturer tool, firmware version and whether configuration is done via SMS, serial, or the vendor app. Because model specific command sets are provided by CanTrack and may change over time, consult the CanTrack documentation or the vendor configuration interface for exact command examples and SMS strings.

If you have a vendor supplied command list or SMS templates, apply the same public Plaspy values shown here when specifying the server host and port.

## Configuration Notes

- Firmware differences and hardware revisions can change the available configuration options and exact command syntax; always reference the device firmware release notes.
- TCP vs UDP selection may affect behavior during network interruptions; choose the transport recommended by the vendor or validated in your deployment tests.
- APN and SIM settings are commonly required for GPRS connectivity; confirm the correct APN for the SIM operator before attempting to register with Plaspy.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so you only need to set the Plaspy host and port on the tracker.
- If the device supports SMS configuration or a vendor app, prefer the method that your installer has validated for reliability and repeatability.

## Why Use Plaspy with This Configuration

Integrating the CanTrack TK200AM with Plaspy gives organizations a practical way to combine long-life asset tracking and tamper alerts with a centralized fleet management platform. The TK200AM's low-power modes and anti-tamper features make it well suited for concealed asset tracking while Plaspy provides the dashboards, alerting and historical reporting needed for operational oversight.

Learn more about Plaspy at https://www.plaspy.com and review the latest device specific information and firmware notes on the CanTrack website https://www.cantrackgps.com/. Manufacturer specifications, setup methods and firmware behavior can change over time so verify current details with the official manufacturer documentation.
