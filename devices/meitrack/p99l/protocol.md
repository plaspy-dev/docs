---
slug: /meitrack/p99l/protocol
id: p99l-protocol
sidebar_label: Protocol
title: Meitrack - P99L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Meitrack P99L with Plaspy for reliable GPS tracking and telemetry
keywords:
  - Meitrack P99L protocol
  - Meitrack P99L GPS protocol
  - Meitrack P99L protocol for Plaspy
  - Meitrack P99L communication protocol
  - Meitrack P99L tracking protocol
  - Meitrack tracker protocol
  - Plaspy compatible trackers
  - P99L Plaspy integration
  - P99L hybrid positioning
  - Meitrack P99L connectivity
---

# Meitrack - P99L Protocol

This page covers the public protocol context for using the Meitrack P99L tracker with Plaspy. It explains how the device reports location and telemetry to Plaspy in general, and how the communication layer fits into a Plaspy deployment without exposing sensitive implementation details. The P99L is a compact, rugged portable tracker designed for long outdoor operation and hybrid positioning modes including GNSS, Wi Fi and LBS with 4G LTE Cat 1 uplink.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to Plaspy. Exact protocol behavior and available features can vary by firmware version, hardware revision, and the manufacturer implementation on a given regional variant, so configuration and behavior in the field may differ between units.

## Protocol Overview

The tracker communication protocol is the set of rules the P99L uses to send location fixes, status updates, and telemetry to a remote server. In the context of Plaspy, the protocol enables the device to identify itself, deliver periodic or event driven position reports, and provide device health data so Plaspy can populate dashboards, alerts, and history views.

- Enables the P99L to report GNSS Wi Fi and LBS location fixes along with telemetry such as battery and connectivity state.
- Provides identification information that lets Plaspy associate reports with a specific device instance.
- Supports periodic and event driven reporting suitable for real time tracking and historical playback.
- Carries device health and status data that Plaspy uses for alerting and remote monitoring.
- Acts as the bridge between the P99L hardware and Plaspy ingestion services without exposing firmware internals.

## How Plaspy Detects the Protocol

Plaspy automatically determines the tracker protocol used by a device when the device is configured to send data to the Plaspy endpoint. This reduces manual configuration steps for most deployments and helps streamline onboarding of Meitrack P99L units.

- Devices should be pointed at the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Plaspy listens on a single port across devices; the platform uses port 8888 for device communication.
- The P99L may be configured to use either UDP or TCP transport to send reports to Plaspy on port 8888.
- Because Plaspy automatically detects the protocol, users typically do not need to select a protocol manually in the Plaspy interface when the device is reporting to the correct endpoint.
- Proper device identification and reliable transport configuration on the device side are the primary requirements for automatic detection.

## Transport and Connection Context

Transport and connection settings determine how the P99L sends data to Plaspy. The device supports cellular uplink and can use either UDP or TCP depending on the firmware and configuration chosen during deployment. Understanding these connection options helps ensure reliable delivery of location and telemetry to Plaspy.

- The P99L may be set to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy receives device traffic on port 8888; all devices supported by Plaspy use the same port.
- The device can use UDP or TCP on port 8888 depending on device support and the selected transport mode.
- Cellular connectivity typically provides the primary uplink for remote tracking while Wi Fi assisted fixes improve accuracy in partial signal areas.
- Configure device APN and regional radio variant settings per manufacturer guidance for consistent connectivity.

## Protocol Compatibility Notes

- Firmware revisions can change how reporting intervals, message types, and optional telemetry fields behave; verify firmware details before large scale rollouts.
- Hardware revisions and regional radio variants may affect available transport options and connection stability in certain markets.
- Manufacturer side settings such as default server address or transport mode may need to be updated to point to d.plaspy.com or 54.85.159.138 on port 8888.
- UDP versus TCP selection can influence delivery behavior in mobile networks; choose the transport mode recommended for your deployment and test coverage.
- Plaspy automatically detects the tracker protocol once the device reports to the correct endpoint, but correct device identity and firmware support are prerequisites.
- Validate compatibility and behavior against Meitrack documentation for the exact model variant and firmware level.

## Why Protocol Understanding Matters

A practical understanding of the P99L communication protocol helps technical teams set up devices correctly, troubleshoot connectivity issues, and plan for maintenance or firmware updates. Knowing how the device reports and what transport it uses reduces onboarding friction and improves long term reliability.

- Helps confirm the device is pointed at the correct Plaspy endpoint and port for automatic protocol detection.
- Simplifies troubleshooting when location reports are missing or telemetry looks incorrect by focusing on transport and firmware factors.
- Supports informed decisions about transport selection UDP or TCP based on coverage and reliability needs.
- Guides device configuration for APN server address and regional settings to maintain consistent connectivity.
- Aids in planning firmware update strategies and regression testing when manufacturer releases change reporting behavior.

## Why Use Plaspy with This Protocol

Using the Meitrack P99L with Plaspy provides organizations with a dependable way to collect long duration location and device health data from a rugged portable tracker. Plaspy normalizes the P99L’s hybrid positioning and telemetry so teams can use real time dashboards, alerts, and historical playback to support safety, asset monitoring, and field operations.

If you want to learn more about how Plaspy works with devices like the Meitrack P99L, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and regional variant information verify documentation and release notes at the manufacturer site https://www.meitrack.com/.
