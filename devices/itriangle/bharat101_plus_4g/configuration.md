---
slug: /itriangle/bharat101_plus_4g/configuration
id: bharat101_plus_4g-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Plus 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for iTriangle Bharat101 Plus 4G and how to point the device to Plaspy for real time tracking
keywords:
  - iTriangle Bharat101 Plus 4G configuration
  - Bharat101 Plus 4G setup
  - iTriangle GPS tracker Plaspy
  - Bharat101 Plus 4G server configuration
  - Plaspy device setup
  - vehicle tracking configuration
  - AIS 140 tracker setup
  - 4G GPS tracker Plaspy
  - fleet management GPS configuration
  - Bharat101 Plus 4G integration
---

# iTriangle - Bharat101 Plus 4G Configuration

This page provides the public configuration context for using the iTriangle Bharat101 Plus 4G tracker with Plaspy. It explains the shared Plaspy server settings required to get the device reporting location and telemetry, and outlines the practical steps and checks typically needed to integrate this AIS 140 certified tracker into the Plaspy platform.

Plaspy uses shared server settings and automatic protocol detection for supported devices, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this document as guidance for pointing the device to Plaspy and validating connectivity, and refer to iTriangle documentation for device-specific instructions.

## Configuration Overview

The goal of configuring the Bharat101 Plus 4G for Plaspy is to ensure the tracker sends GNSS location and telemetry reliably to the Plaspy ingestion endpoint so the device becomes visible and manageable in the Plaspy dashboard. Configuration focuses on network endpoint setup, transport selection, and validating the device is reporting correctly after installation.

- Point the device to the Plaspy server endpoint so data is delivered to your Plaspy account
- Select the appropriate transport (UDP or TCP) and set the shared Plaspy port
- Validate cellular connectivity and that the device can reach d.plaspy.com or the Plaspy server IP
- Apply and save settings using the official iTriangle configuration method or tool
- Confirm the tracker appears and reports telemetry in Plaspy dashboards and alerts

## Plaspy Server Settings

When configuring the Bharat101 Plus 4G for Plaspy, use the following public server settings exactly as shown:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the shared Plaspy endpoint details used to ingest data from compatible trackers.

## Typical Requirements Before Setup

- Confirm the Bharat101 Plus 4G has power and is installed or temporarily powered for configuration
- Ensure the device has a working cellular connection (secure eSIM or mobile service active) and data enabled
- Access to the official iTriangle configuration tool, SMS commands, USB configuration port, or authorized vendor software
- The device firmware revision and hardware revision are known so you can follow the matching manufacturer guide
- A Plaspy account and device registration information to verify the tracker appears in the platform after setup

## How This Tracker Connects to Plaspy

The Bharat101 Plus 4G streams GNSS position and vehicle telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests the incoming packets and maps the device data to the platform for live tracking, event handling, and reporting.

- Device reports location and telemetry to d.plaspy.com (or 54.85.159.138) on port 8888
- You can configure transport as UDP or TCP depending on device firmware and preference
- Plaspy automatically detects the tracker protocol so the same Plaspy port is used across supported devices
- When connectivity is interrupted, on-device logging stores records and syncs with Plaspy after reconnection
- Reported events such as ignition, tamper, panic, or immobilizer status appear in Plaspy as configured

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for the Bharat101 Plus 4G (manufacturer app, USB tool, SMS commands, or vendor portal).
2. In the device network or server settings enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. If the device requires selection of transport, choose UDP or TCP as supported by the tracker firmware.
5. Apply or save the configuration in the manufacturer tool and ensure the settings are committed to the device.
6. Restart the device if required by the firmware or configuration tool to apply changes.
7. Validate that the device reports to Plaspy by checking device activity and telemetry in your Plaspy account.

## Example Configuration Commands

The exact configuration commands and interfaces for the Bharat101 Plus 4G depend on the manufacturer tool, firmware version, and provisioning method. iTriangle devices commonly support configuration via the official configuration software, USB connection, or remote configuration channels; command syntax and steps vary accordingly. Follow the iTriangle configuration guide or installer tool for the precise commands and examples that match your firmware revision.

## Configuration Notes

- Firmware differences can change menu layout, command syntax, and transport options; always check the device firmware version before applying instructions
- Choosing UDP or TCP can affect reliability and packet acknowledgement; select the transport your deployment and firmware best support
- Plaspy uses the same port 8888 for all supported devices and automatically detects the protocol, so you only need to point the device to d.plaspy.com or 54.85.159.138 and set port 8888
- Use the official iTriangle configuration tools or authorized vendor interfaces to avoid unsupported settings or locking the device
- For AIS 140 or other regulatory deployments, verify any additional reporting or compliance settings with iTriangle documentation and local requirements

## Why Use Plaspy with This Configuration

Using the Bharat101 Plus 4G with Plaspy gives fleet operators centralized visibility into real time location, event alerts, and vehicle telemetry consolidated on a single platform. The combination of AIS 140 compliance, multi GNSS resiliency, and secure cellular connectivity makes this tracker a reliable endpoint for monitoring public transport, commercial fleets, and heavy equipment.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify information on the official iTriangle website https://www.itriangle.net/ as specifications and setup procedures can change over time.
