---
slug: /istartek/pt32/protocol
id: pt32-protocol
sidebar_label: Protocol
title: iStartek - PT32 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview explaining how the iStartek PT32 communicates with Plaspy for reliable pet tracking
keywords:
  - iStartek PT32 protocol
  - iStartek PT32 GPS
  - PT32 Plaspy compatibility
  - PT32 communication protocol
  - iStartek tracker protocol
  - pet tracker PT32
  - PT32 4G GPS tracker
  - PT32 tracking protocol Plaspy
  - GPS tracker protocol guide
  - Plaspy device protocol
---

# iStartek - PT32 Protocol

This page presents the public protocol context for connecting the iStartek PT32 GPS pet tracker to the Plaspy platform. It describes how the PT32 reports location and status in general terms and explains the elements of device communication that matter when integrating this compact 4G tracker into Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware revision, hardware variant, and manufacturer implementation, so this page focuses on safe, public information that helps with setup, testing, and troubleshooting while avoiding device internals.

## Protocol Overview

The PT32 uses an over the air reporting mechanism to deliver position, movement, and device status to a remote server. In practice this communication protocol defines how the tracker identifies itself, how location and sensor data are packaged, and how the server acknowledges or logs those reports so the data becomes usable inside Plaspy.

- Enables the PT32 to transmit GNSS and LBS location updates plus basic telemetry such as battery and movement.
- Carries device identity information so Plaspy can associate reports with the correct tracker record.
- Supports event and alarm reporting for pet focused signals like vibration, low battery, and geo fence alerts.
- Allows the platform to receive periodic or on-demand updates depending on device mode and configuration.
- Provides the basis for remote commands where supported, for example triggering the buzzer or light for pet search.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices on a single shared endpoint and port and automatically determines which tracker protocol is being used. When the PT32 is configured to report to Plaspy, the platform will analyze incoming messages at the network boundary so users typically do not need to select a protocol inside Plaspy manually.

- Plaspy listens for incoming device traffic at the public server address d.plaspy.com.
- The platform server IP for device reporting is 54.85.159.138 and the configured port is 8888.
- Plaspy automatically detects the tracker protocol from the incoming session and payload characteristics.
- In most cases you only need to point the PT32 to the Plaspy endpoint and ensure correct transport and credentials on the device.
- If a device is properly configured to report to Plaspy, manual protocol selection inside the platform is usually unnecessary.

## Transport and Connection Context

Connection context covers how the PT32 actually reaches Plaspy over the mobile network. The device can be configured to use standard transport modes based on its firmware and network environment, and the same port is used across all devices connected to Plaspy.

- The PT32 may be configured to use UDP or TCP depending on device support and configuration choices.
- All devices in Plaspy use the same port and the common port value for device reporting is 8888.
- Devices can be pointed to the domain d.plaspy.com or the server IP 54.85.159.138 for direct reporting.
- Choice of UDP versus TCP can affect delivery behavior and should follow manufacturer guidance for the PT32 firmware variant.
- Network considerations such as mobile carrier NAT, APN settings, and signal quality can influence connection stability.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported transports, and available event types; always note the firmware version when validating behavior.
- Hardware variants or regional models may implement slightly different radio or GNSS stacks that alter reporting characteristics.
- Manufacturer supplied default settings may use SMS fallback or alternate servers; confirm the device points to d.plaspy.com or 54.85.159.138 on port 8888 when integrating with Plaspy.
- Using UDP versus TCP is a configuration decision on the device and may vary by PT32 model or firmware.
- Verify whether remote command features such as buzzer or light triggering require additional configuration or permissions.
- Confirm whether FOTA and remote management are enabled for your device and account before performing remote upgrades.

## Why Protocol Understanding Matters

A practical understanding of the PT32 communication protocol helps ensure reliable setup and long term operation with Plaspy. Knowing what the tracker sends and how the platform receives it makes it easier to resolve connectivity issues, validate data integrity, and plan device deployment.

- Speeds up initial device provisioning by confirming correct reporting host, transport, and port.
- Helps isolate connectivity problems such as missing reports, incorrect timestamps, or intermittent sessions.
- Makes it simpler to check that device identity and telemetry are mapped to the correct user or asset in Plaspy.
- Aids in planning for battery impact when choosing reporting intervals and power modes.
- Supports change control when firmware updates or manufacturer configuration changes are applied.

## Why Use Plaspy with This Protocol

Using the PT32 with Plaspy provides a straightforward way to centralize pet tracking, receive alerts, and review historical routes. The PT32 supplies high sensitivity GNSS data, movement events, and pet specific alarms while Plaspy offers the dashboard, alerting and history features needed for recovery and monitoring workflows.

Plaspy is designed to automatically accept reports from compatible trackers when the device is configured to the shared Plaspy endpoint and port. To learn more about how Plaspy works and to explore platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance from the manufacturer, please verify information at https://istartek.com/ as device behavior and firmware features may change over time.
