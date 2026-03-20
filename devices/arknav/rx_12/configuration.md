---
slug: /arknav/rx_12/configuration
id: rx_12-configuration
sidebar_label: Configuration
title: ArkNav - RX-12 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ArkNav RX-12 GPS tracker setup and Plaspy compatibility for fleet tracking and telemetry
keywords:
  - ArkNav RX-12 configuration
  - ArkNav RX-12 setup
  - Plaspy RX-12 compatibility
  - RX-12 server configuration
  - RX-12 GPS tracker setup
  - ArkNav GPS configuration
  - RX-12 fleet tracking
  - RX-12 LTE M configuration
  - ArkNav Plaspy guide
  - RX-12 telemetry setup
---

# ArkNav - RX-12 Configuration

This page documents the public configuration context for deploying the ArkNav RX-12 GPS tracker with Plaspy. It describes the practical server settings and workflow required to point the RX-12 to Plaspy so devices can report position and telemetry to the platform. Use this guide together with the manufacturer documentation for device specific UI, SMS, or USB configuration steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, which simplifies server-side setup. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so always confirm procedure details in the official ArkNav documentation or device setup software.

## Configuration Overview

The goal of the configuration process is to prepare the RX-12 to communicate reliably with Plaspy and to validate connectivity so units appear in the Plaspy platform. This includes setting the correct server endpoint and port, selecting the transport type if required, and verifying the device reports GNSS and event data to Plaspy.

- Configure the device to send GNSS and telemetry to the Plaspy server endpoint.
- Select UDP or TCP transport on the tracker if the device firmware requires a transport selection.
- Ensure the device has an active SIM and cellular coverage for LTE‑M or 2G fallback.
- Validate the device appears in Plaspy and that event driven reporting (motion, ignition, speed) is received.
- Save and apply configuration and perform a restart if the manufacturer procedure requires it.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the ArkNav RX-12. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy performs automatic protocol detection for incoming tracker connections

## Typical Requirements Before Setup

- Physical access to the RX-12 and any required installer tools or USB configuration cable.
- A provisioned Nano SIM with a data plan that supports LTE‑M and 2G fallback where required.
- Confirmed cellular coverage in the deployment area for LTE‑M or EGPRS networks.
- Access to the official ArkNav configuration method such as vendor software, SMS command list, or USB debug tool.
- Current device firmware or a plan to update firmware if recommended by ArkNav for Plaspy compatibility.
- Power source for the tracker and a stable electrical connection when deploying in vehicles.

## How This Tracker Connects to Plaspy

The RX-12 transmits GNSS positions and telemetry over LTE‑M or EGPRS to the Plaspy cloud endpoint where location and sensor data are processed. When configured with the Plaspy server settings, the tracker sends event driven updates so the platform can provide real time visibility and alerts.

- The device reports GNSS fixes to the shared Plaspy server endpoint and port.
- Event driven reporting such as motion, speed, and ignition changes are sent to Plaspy for alerting and trip segmentation.
- Input and output states (for example immobilizer status) are reported to Plaspy if wired and configured on the RX-12.
- Plaspy receives telemetry and stores it for real time dashboards, history, and reporting.
- Plaspy automatically detects the tracker protocol when the device connects to the shared port.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software according to the RX-12 installer or user guide.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared port used by Plaspy for all devices.
4. If the device requires a transport selection, choose UDP or TCP depending on installer preference and firmware support.
5. Apply or save the configuration in the ArkNav tool or via the device command method.
6. Restart the device if the manufacturer instructions require a reboot to activate the new server settings.
7. Validate that the RX-12 reports to Plaspy by confirming the device appears in the Plaspy platform and that position or event messages are received.

## Example Configuration Commands

The exact configuration commands and syntax depend on the ArkNav configuration utility, SMS command set, or USB debug interface and can vary by firmware. ArkNav typically provides a command list or configuration utility for entering server domain or IP, port, transport, APN settings, and other parameters. Consult the ArkNav RX-12 user manual for exact command formats and step by step procedures.

If you have ArkNav public command examples from firmware or a vendor tool, include them here following the device guide. Keep placeholders such as [apn] or [apnu] exactly as provided by the manufacturer and substitute them with your operator APN credentials during configuration.

## Configuration Notes

- Firmware differences can change the exact configuration UI, SMS command syntax, or permitted transport options; verify the RX-12 firmware release notes before you configure devices.
- For devices that allow both TCP and UDP, choose the transport supported by your installation and network conditions; Plaspy accepts both on port 8888.
- Use the domain d.plaspy.com when possible to allow DNS based routing; the IP 54.85.159.138 is provided as an alternative when required by constrained configuration tools.
- If you perform OTA updates, ensure that changes to configuration templates are tested on a sample device before mass deployment.
- Keep a record of device IMEI and installation details to expedite validation in Plaspy and to troubleshoot connectivity issues.

## Why Use Plaspy with This Configuration

Configuring the ArkNav RX-12 to report to Plaspy gives fleet operators centralized visibility into vehicle location, status, and event driven telemetry. The RX-12’s rugged design and LTE‑M with 2G fallback make it a dependable endpoint for assets that require reliable reporting with minimal maintenance, while Plaspy handles protocol detection and centralized processing.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest RX-12 setup information and technical references on the ArkNav website https://www.arknavgps.com.tw/.
